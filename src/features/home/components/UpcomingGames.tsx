'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export interface Game {
    id: number;
    p1: string;
    p2: string;
    result: string;   // '1-0' | '0-1' | '½-½'
    type: string;
    moves: number;
    date: string;
}

interface Props {
    games: Game[];
}

function ResultBadge({ result }: { result: string }) {
    if (result === '1-0') return (
        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#4CAF50]/15 text-[#4CAF50]">1-0</span>
    );
    if (result === '0-1') return (
        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-500/15 text-red-400">0-1</span>
    );
    return (
        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#555]/20 text-[#8A8F98]">½-½</span>
    );
}

export default function UpcomingGames({ games }: Props) {
    return (
        <div className="bg-[#0D0D0D] border border-[#1A1A1A] rounded-2xl overflow-hidden flex-shrink-0">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#1A1A1A]">
                <span className="text-white font-semibold text-sm">Yakunlashgan o&apos;yinlar</span>
                <Link href="#" className="text-[#2EA6FF] text-xs flex items-center gap-0.5 hover:underline">
                    Barchasi <ChevronRight size={12} />
                </Link>
            </div>

            <table className="w-full text-xs border-collapse">
                <thead>
                    <tr className="border-b border-[#1A1A1A]">
                        <th className="text-left text-[#555] font-medium px-4 py-2">O&apos;YINCHILAR</th>
                        <th className="text-center text-[#555] font-medium px-3 py-2">NATIJA</th>
                        <th className="text-left text-[#555] font-medium px-3 py-2">O&apos;YIN TURI</th>
                        <th className="text-center text-[#555] font-medium px-3 py-2">YURUSHLAR</th>
                        <th className="text-left text-[#555] font-medium px-3 py-2">SANA</th>
                    </tr>
                </thead>
                <tbody>
                    {games.map((g) => (
                        <tr key={g.id} className="border-b border-[#111] hover:bg-[#0F0F0F] transition-colors cursor-pointer">
                            <td className="px-4 py-2.5">
                                <div className="flex flex-col gap-0.5">
                                    <span className={`font-medium ${g.result === '1-0' ? 'text-white' : 'text-[#666]'}`}>{g.p1}</span>
                                    <span className={`font-medium ${g.result === '0-1' ? 'text-white' : 'text-[#666]'}`}>{g.p2}</span>
                                </div>
                            </td>
                            <td className="px-3 py-2.5 text-center">
                                <ResultBadge result={g.result} />
                            </td>
                            <td className="px-3 py-2.5">
                                <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                                    g.type === 'Bullet'  ? 'bg-red-500/15 text-red-400'      :
                                    g.type === 'Blitz'   ? 'bg-orange-500/15 text-orange-400' :
                                    g.type === 'Rapid'   ? 'bg-blue-500/15 text-[#2EA6FF]'   :
                                                           'bg-purple-500/15 text-purple-400'
                                }`}>
                                    {g.type}
                                </span>
                            </td>
                            <td className="px-3 py-2.5 text-center text-[#8A8F98]">{g.moves}</td>
                            <td className="px-3 py-2.5 text-[#8A8F98] whitespace-nowrap">{g.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}