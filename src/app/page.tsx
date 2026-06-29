'use client';

import { useEffect, useState } from 'react';
import api from '@/lib/api';

import DailyGame from '@/features/home/components/DailyGame';
import PlayerRating, { Player } from '@/features/home/components/PlayerRating';
import CourseBanners from '@/features/home/components/CourseBanners';
import UpcomingGames, { Game } from '@/features/home/components/UpcomingGames';
import ChessComBanner from '@/features/home/components/ChessComBanner';
import NewsList, { NewsItem } from '@/features/home/components/NewsList';
import SidebarPromo from '@/features/home/components/SidebarPromo';
import TopCourses, { Course } from '@/features/home/components/TopCourses';
import TopBooks, { Book } from '@/features/home/components/TopBooks';

const BASE = 'http://localhost:3001';

const STATIC_PLAYERS: Player[] = [
    { id: 1, fullName: 'Magnus Carlsen',        rating: 2851, country: 'NO' },
    { id: 2, fullName: 'Hikaru Nakamura',        rating: 2860, country: 'US' },
    { id: 3, fullName: 'Abdusattorov Nodirbek',  rating: 2850, country: 'UZ' },
    { id: 4, fullName: 'Sindarov Javokhir',      rating: 2676, country: 'UZ' },
    { id: 5, fullName: 'Yaqubboev Nodirbek',     rating: 2639, country: 'UZ' },
];

const STATIC_GAMES: Game[] = [
    { id: 101, p1: 'Abdusattorov Nodirbek', p2: 'Magnus Carlsen',   result: '1-0',  type: 'Rapid',  moves: 42, date: '12 Dek 2024' },
    { id: 102, p1: 'Hikaru Nakamura',       p2: 'Ding Liren',       result: '½-½',  type: 'Blitz',  moves: 38, date: '10 Dek 2024' },
    { id: 103, p1: 'Sindarov Javokhir',     p2: 'Rapport Richard',  result: '1-0',  type: 'Bullet', moves: 31, date: '8 Dek 2024'  },
    { id: 104, p1: 'Gukesh Dommaraju',      p2: 'Fabiano Caruana',  result: '0-1',  type: 'Rapid',  moves: 55, date: '5 Dek 2024'  },
    { id: 105, p1: 'Yaqubboev Nodirbek',    p2: 'Gelfand Boris',    result: '1-0',  type: 'Blitz',  moves: 27, date: '2 Dek 2024'  },
];

export default function HomePage() {
    const [courses, setCourses] = useState<Course[]>([]);
    const [news,    setNews]    = useState<NewsItem[]>([]);
    const [books,   setBooks]   = useState<Book[]>([]);
    const [players, setPlayers] = useState<Player[]>(STATIC_PLAYERS);
    const [loading, setLoading] = useState(true);
    const [newsVisible, setNewsVisible] = useState(4);

    useEffect(() => {
        (async () => {
            try {
                const [cRes, nRes, bRes] = await Promise.all([
                    api.get('/public/courses').catch(() => ({ data: [] })),
                    api.get('/public/news').catch(() => ({ data: [] })),
                    api.get('/public/book').catch(() => ({ data: [] })),
                ]);
                setCourses(Array.isArray(cRes.data?.data) ? cRes.data.data : Array.isArray(cRes.data) ? cRes.data : []);
                setNews(Array.isArray(nRes.data?.data) ? nRes.data.data : Array.isArray(nRes.data) ? nRes.data : []);
                setBooks(Array.isArray(bRes.data?.data) ? bRes.data.data : Array.isArray(bRes.data) ? bRes.data : []);
                try {
                    const pRes = await api.get('/public/player');
                    const pd = Array.isArray(pRes.data?.data) ? pRes.data.data : Array.isArray(pRes.data) ? pRes.data : [];
                    if (pd.length > 0) setPlayers(pd);
                } catch { /* static fallback */ }
            } catch (err) {
                console.error('Home fetch error:', err);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    return (
        <div className="bg-black overflow-hidden" style={{ height: 'calc(100vh - 108px)' }}>
            <div
                className="h-full overflow-y-auto"
                style={{ scrollbarWidth: 'none' }}
            >
                <div className="w-full max-w-[1700px] mx-auto px-6 py-6 flex gap-5 items-start">

                    <aside className="w-[230px] flex-shrink-0 flex flex-col gap-4">
                        <DailyGame />
                        <PlayerRating players={players} loading={loading} />
                    </aside>

                    <div className="flex-1 min-w-0 flex flex-col gap-4">
                        <CourseBanners />
                        <UpcomingGames games={STATIC_GAMES} />
                        <ChessComBanner />
                        <NewsList
                            news={news}
                            loading={loading}
                            visible={newsVisible}
                            onLoadMore={() => setNewsVisible(v => v + 4)}
                        />
                    </div>

                    <aside className="w-[265px] flex-shrink-0 flex flex-col gap-4">
                        <SidebarPromo />
                        <TopCourses courses={courses} loading={loading} />
                        <TopBooks books={books} loading={loading} />
                    </aside>

                </div>
            </div>
        </div>
    );
}