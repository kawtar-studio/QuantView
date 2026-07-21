import type { ReactNode } from "react";

interface CardProps {
    title?: string;
    children: ReactNode;
}

const Card = ({ title, children }: CardProps) => {
    return (
        <div
            className="
        rounded-2xl
        border border-zinc-800
        bg-zinc-900/60
        p-6
        shadow-lg
        backdrop-blur-sm
      "
        >
            {title && (
                <h3 className="mb-4 text-lg font-semibold text-white">
                    {title}
                </h3>
            )}

            {children}
        </div>
    );
};

export default Card;