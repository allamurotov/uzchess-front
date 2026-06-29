import Link from 'next/link';

export default function ChessComBanner() {
    return (
        <div className="flex-shrink-0 w-full rounded-2xl overflow-hidden bg-[#0A0A0A] border border-[#1A1A1A]" style={{ minHeight: '100px' }}>
            <div className="flex items-center justify-between h-full px-6 py-5">
                <div className="flex items-center gap-4">
                    <div className="flex -space-x-1">
                        {['♔', '♕', '♖'].map((piece, i) => (
                            <div key={i} className="w-9 h-9 rounded-full bg-[#1A1A1A] border-2 border-[#0A0A0A] flex items-center justify-center text-white text-lg">
                                {piece}
                            </div>
                        ))}
                    </div>
                    <div>
                        <p className="text-[10px] text-[#8A8F98] font-medium tracking-widest uppercase">2022</p>
                        <p className="text-white font-black text-lg leading-tight tracking-wide">CHESS.COM</p>
                        <p className="text-[#2EA6FF] font-bold text-sm tracking-widest uppercase">GLOBAL</p>
                    </div>
                </div>
                <Link
                    href="https://chess.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#4CAF50] hover:bg-[#43A047] text-white text-sm font-bold px-6 py-2.5 rounded-xl transition-colors whitespace-nowrap"
                >
                    Ko&apos;rish
                </Link>
            </div>
        </div>
    );
}