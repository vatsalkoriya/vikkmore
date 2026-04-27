"use client";
import PlaylistView from '@/views/PlaylistView';
import { useRouter } from 'next/navigation';
import { use } from 'react';

export default function Page(props: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const params = use(props.params);
  return <PlaylistView playlistId={params.id} onNavigate={(path) => router.push(`/${path}`)} />;
}
