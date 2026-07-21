import type { ReactNode } from "react";

interface CardProps {
    title?: string;
    children: ReactNode;
}

const Card = ({ title, children }: CardProps) => {
    return (
        <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition-all duration-500 hover:border-[#7C5CFF]/30 hover:bg-white/[0.055]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,#7C5CFF12,transparent_35%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative">
                {title && (
                    <div className="mb-6 flex items-center justify-between">
                        <h3 className="text-lg font-semibold tracking-tight text-white">
                            {title}
                        </h3>
                    </div>
                )}

                {children}
            </div>
        </div>
    );
};

export default Card;