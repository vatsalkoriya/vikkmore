import { getApiKey } from "./storage";
import type { Song } from "./storage";

function parseDuration(iso: string): string {
  const m = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!m) return "";
  const h = parseInt(m[1] || "0");
  const min = parseInt(m[2] || "0");
  const sec = parseInt(m[3] || "0");
  if (h > 0) return `${h}:${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  return `${min}:${String(sec).padStart(2, "0")}`;
}

export async function searchYouTube(query: string): Promise<Song[]> {
  const apiKey = getApiKey();
  if (!apiKey) throw new Error("API key not set");

  const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&videoCategoryId=10&q=${encodeURIComponent(query)}&key=${apiKey}`;
  const res = await fetch(searchUrl);
  if (!res.ok) throw new Error("YouTube search failed");
  const data = await res.json();

  const ids = data.items.map((i: any) => i.id.videoId).join(",");
  const detailsUrl = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${ids}&key=${apiKey}`;
  const detailsRes = await fetch(detailsUrl);
  const detailsData = await detailsRes.json();
  const durationMap: Record<string, string> = {};
  detailsData.items?.forEach((i: any) => { durationMap[i.id] = parseDuration(i.contentDetails.duration); });

  return data.items.map((item: any) => ({
    id: item.id.videoId,
    title: item.snippet.title,
    artist: item.snippet.channelTitle,
    thumbnail: item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.default?.url,
    duration: durationMap[item.id.videoId] || "",
  }));
}

export async function getTrendingMusic(): Promise<Song[]> {
  const apiKey = getApiKey();
  if (!apiKey) return [];

  const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&chart=mostPopular&videoCategoryId=10&maxResults=20&regionCode=US&key=${apiKey}`;
  const res = await fetch(url);
  if (!res.ok) return [];
  const data = await res.json();

  return data.items.map((item: any) => ({
    id: item.id,
    title: item.snippet.title,
    artist: item.snippet.channelTitle,
    thumbnail: item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.default?.url,
    duration: parseDuration(item.contentDetails.duration),
  }));
}

function extractPlaylistId(input: string): string | null {
  const urlMatch = input.match(/[?&]list=([a-zA-Z0-9_-]+)/);
  if (urlMatch) return urlMatch[1];
  if (/^[a-zA-Z0-9_-]{10,}$/.test(input.trim())) return input.trim();
  return null;
}

export async function importYouTubePlaylist(input: string): Promise<{ name: string; songs: Song[] }> {
  const apiKey = getApiKey();
  if (!apiKey) throw new Error("API key not set");

  const playlistId = extractPlaylistId(input);
  if (!playlistId) throw new Error("Invalid playlist URL or ID");

  // Get playlist info
  const infoUrl = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&id=${playlistId}&key=${apiKey}`;
  const infoRes = await fetch(infoUrl);
  if (!infoRes.ok) throw new Error("Failed to fetch playlist info");
  const infoData = await infoRes.json();
  const playlistName = infoData.items?.[0]?.snippet?.title || "Imported Playlist";

  // Get all items (paginated)
  const allSongs: Song[] = [];
  let pageToken = "";
  
  do {
    const itemsUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${apiKey}${pageToken ? `&pageToken=${pageToken}` : ""}`;
    const itemsRes = await fetch(itemsUrl);
    if (!itemsRes.ok) throw new Error("Failed to fetch playlist items");
    const itemsData = await itemsRes.json();

    const validItems = itemsData.items?.filter((i: any) => i.snippet?.resourceId?.videoId) || [];
    const videoIds = validItems.map((i: any) => i.snippet.resourceId.videoId).join(",");

    if (videoIds) {
      const detailsUrl = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${videoIds}&key=${apiKey}`;
      const detailsRes = await fetch(detailsUrl);
      const detailsData = await detailsRes.json();
      const durationMap: Record<string, string> = {};
      detailsData.items?.forEach((i: any) => { durationMap[i.id] = parseDuration(i.contentDetails.duration); });

      for (const item of validItems) {
        const videoId = item.snippet.resourceId.videoId;
        allSongs.push({
          id: videoId,
          title: item.snippet.title,
          artist: item.snippet.videoOwnerChannelTitle || item.snippet.channelTitle || "",
          thumbnail: item.snippet.thumbnails?.medium?.url || item.snippet.thumbnails?.default?.url || "",
          duration: durationMap[videoId] || "",
        });
      }
    }

    pageToken = itemsData.nextPageToken || "";
  } while (pageToken);

  return { name: playlistName, songs: allSongs };
}
