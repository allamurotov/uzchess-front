'use client';

import Link from 'next/link';
import Image from 'next/image';

interface Props {
    onClose: () => void;
}

export default function AuthModal({ onClose }: Props) {
    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            <div className="relative z-10 w-full max-w-[820px] bg-[#0D1117] rounded-2xl overflow-hidden border border-[#1F2937] shadow-2xl">

                <div className="flex items-center justify-between px-6 py-4 border-b border-[#1F2937]">
                    <Image
                        src="/uzchess.png"
                        alt="UzChess"
                        width={130}
                        height={34}
                        className="h-8 w-auto object-contain"
                    />

                    <button
                        onClick={onClose}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1A1D21] hover:bg-[#2A2D31] text-gray-400 hover:text-white transition-colors text-lg"
                    >
                        ✕
                    </button>
                </div>

                <div className="flex min-h-[380px]">

                    <div className="w-[45%] flex-shrink-0 flex flex-col items-center justify-center px-8 py-10 text-center">

                        <div className="w-[160px] h-[120px] bg-[#141920] border border-[#1F2937] rounded-2xl flex items-center justify-center mb-6">
                            <div className="relative">
                                <div className="w-16 h-12 bg-[#1E2530] rounded-lg border border-[#2A3340] flex items-center justify-center">
                                    <div className="w-10 h-8 bg-[#0D1117] rounded border border-[#2A3340]" />
                                </div>
                                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-2 bg-[#1E2530] rounded" />
                                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#1E2530] rounded" />
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#2EA6FF] rounded-full w-6 h-6 flex items-center justify-center text-white text-xs font-bold">
                                    🔒
                                </div>
                            </div>
                        </div>

                        <h2 className="text-white text-[17px] font-bold leading-snug mb-3">
                            UzChess platformasidan to&apos;liq foydalanish uchun tizimga kiring.
                        </h2>

                        <p className="text-[#8A8F98] text-[13px] leading-relaxed mb-7">
                            Platformaning barcha imkoniyatlaridan foydalanish uchun tizimga kiring.
                        </p>

                        <Link
                            href="/auth/sign-in"
                            onClick={onClose}
                            className="w-full py-3 bg-[#2EA6FF] hover:bg-[#1E96F0] text-white font-semibold rounded-xl transition-colors text-center text-sm block mb-3"
                        >
                            Kirish
                        </Link>

                        <Link
                            href="/auth/sign-up"
                            onClick={onClose}
                            className="text-[#8A8F98] text-sm hover:text-white transition-colors"
                        >
                            Ro&apos;yxatdan o&apos;tish
                        </Link>
                    </div>

                    <div className="flex-1 hidden md:flex items-center justify-center overflow-hidden"
                        style={{ background: 'linear-gradient(160deg, #0e1e35 0%, #0a1525 40%, #060A0F 100%)' }}>
                        <Image
                            src="/Frame 427318502.png"
                            alt="UzChess"
                            width={300}
                            height={380}
                            className="w-full h-full object-cover"
                            priority
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}