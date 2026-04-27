"use client";
import HomeView from '@/views/HomeView';
import { useRouter } from 'next/navigation';

export default function Page() { 
  const router = useRouter();
  return <HomeView onNavigate={(path) => router.push(`/${path}`)} />; 
}
