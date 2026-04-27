import { getUserLibraryCollection } from "./_lib/mongodb";

const parseBody = async (req: any) => {
  if (typeof req.body === "string") {
    return JSON.parse(req.body);
  }
  return req.body;
};

export default async function handler(req: any, res: any) {
  if (req.method !== "GET" && req.method !== "PUT") {
    res.setHeader("Allow", "GET, PUT");
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const userId = req.method === "GET" ? req.query.userId : (await parseBody(req))?.userId;

    if (!userId || typeof userId !== "string") {
      return res.status(400).json({ error: "userId is required" });
    }

    const collection = await getUserLibraryCollection();

    if (req.method === "GET") {
      const doc = await collection.findOne(
        { userId },
        { projection: { _id: 0, likedSongs: 1, playlists: 1, recentSongs: 1 } }
      );

      return res.status(200).json({
        likedSongs: doc?.likedSongs || [],
        playlists: doc?.playlists || [],
        recentSongs: doc?.recentSongs || [],
      });
    }

    const body = await parseBody(req);
    const likedSongs = Array.isArray(body?.likedSongs) ? body.likedSongs : [];
    const playlists = Array.isArray(body?.playlists) ? body.playlists : [];
    const recentSongs = Array.isArray(body?.recentSongs) ? body.recentSongs : [];
    const now = new Date();

    await collection.updateOne(
      { userId },
      {
        $set: {
          userId,
          likedSongs,
          playlists,
          recentSongs,
          updatedAt: now,
        },
        $setOnInsert: {
          createdAt: now,
        },
      },
      { upsert: true }
    );

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("user-data api error", error);
    return res.status(500).json({ error: "Failed to process library request" });
  }
}
