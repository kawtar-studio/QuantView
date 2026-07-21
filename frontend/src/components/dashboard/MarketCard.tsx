import {
    ArrowDownRight,
    ArrowUpRight,
} from "lucide-react";
import Card from "../ui/Card";

interface MarketCardProps {
    title: string;
    price: string;
    change: string;
    positive: boolean;
}

const MarketCard = ({
    title,
    price,
    change,
    positive,
}: MarketCardProps) => {
    return (
        <Card>
            <div className="group relative overflow-hidden">
                <div
                    className={`absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl ${positive
                            ? "bg-emerald-500/10"
                            : "bg-red-500/10"
                        }`}
                />

                <div className="relative space-y-5">
                    <div className="flex items-center justify-between">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                            {title}
                        </p>

                        <div
                            className={`flex h-8 w-8 items-center justify-center rounded-xl ${positive
                                    ? "bg-emerald-500/10 text-emerald-400"
                                    : "bg-red-500/10 text-red-400"
                                }`}
                        >
                            {positive ? (
                                <ArrowUpRight size={16} />
                            ) : (
                                <ArrowDownRight size={16} />
                            )}
                        </div>
                    </div>

                    <div>
                        <p className="text-3xl font-semibold tracking-tight text-white">
                            {price}
                        </p>

                        <div className="mt-3 flex items-center gap-2">
                            <span
                                className={`rounded-full px-3 py-1 text-xs font-semibold ${positive
                                        ? "bg-emerald-500/10 text-emerald-400"
                                        : "bg-red-500/10 text-red-400"
                                    }`}
                            >
                                {change}
                            </span>

                            <span className="text-xs text-zinc-500">
                                Today
                            </span>
                        </div>
                    </div>

                    <div className="relative h-14 overflow-hidden rounded-xl border border-white/5 bg-white/[0.03]">
                        <div
                            className={`absolute bottom-0 left-0 h-full w-full ${positive
                                    ? "bg-gradient-to-t from-emerald-500/10 to-transparent"
                                    : "bg-gradient-to-t from-red-500/10 to-transparent"
                                }`}
                        />

                        <svg
                            viewBox="0 0 200 60"
                            className="absolute inset-0 h-full w-full"
                            fill="none"
                        >
                            <path
                                d={
                                    positive
                                        ? "M0 45 C25 40, 35 42, 55 30 C80 12, 95 25, 120 20 C145 15, 160 5, 200 10"
                                        : "M0 15 C25 20, 45 25, 65 35 C95 50, 120 38, 145 45 C165 50, 180 55, 200 50"
                                }
                                stroke="currentColor"
                                strokeWidth="2"
                                className={
                                    positive
                                        ? "text-emerald-400"
                                        : "text-red-400"
                                }
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default MarketCard;