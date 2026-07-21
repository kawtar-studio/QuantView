import { ArrowDownRight, ArrowUpRight } from "lucide-react";

interface WatchlistStock {
    symbol: string;
    name: string;
    price: string;
    change: string;
    positive: boolean;
}

const watchlist: WatchlistStock[] = [
    {
        symbol: "AAPL",
        name: "Apple",
        price: "$212.41",
        change: "+1.42%",
        positive: true,
    },
    {
        symbol: "MSFT",
        name: "Microsoft",
        price: "$537.88",
        change: "+0.78%",
        positive: true,
    },
    {
        symbol: "NVDA",
        name: "NVIDIA",
        price: "$182.13",
        change: "+3.91%",
        positive: true,
    },
    {
        symbol: "TSLA",
        name: "Tesla",
        price: "$297.64",
        change: "-2.16%",
        positive: false,
    },
    {
        symbol: "AMZN",
        name: "Amazon",
        price: "$231.74",
        change: "+0.35%",
        positive: true,
    },
];

const WatchlistPanel = () => {
    return (
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-b from-zinc-900/70 to-zinc-950/90 p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_24px_-8px_rgba(0,0,0,0.5)] backdrop-blur-xl">
            <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-[#7C5CFF]/10 blur-3xl" />

            <div className="relative mb-5 flex items-center justify-between">
                <h2 className="text-[15px] font-semibold tracking-tight text-white">
                    Watchlist
                </h2>
                <span className="text-xs font-medium text-zinc-500">
                    5 Assets
                </span>
            </div>

            <div className="relative space-y-1.5">
                {watchlist.map((stock) => (
                    <div
                        key={stock.symbol}
                        className="flex items-center justify-between rounded-xl border border-transparent p-3 transition-all duration-300 hover:border-white/[0.06] hover:bg-white/[0.03]"
                    >
                        <div>
                            <h3 className="text-sm font-semibold text-white">
                                {stock.symbol}
                            </h3>
                            <p className="mt-0.5 text-xs text-zinc-500">
                                {stock.name}
                            </p>
                        </div>

                        <div className="text-right">
                            <p className="text-sm font-semibold text-white">
                                {stock.price}
                            </p>
                            <div
                                className={`mt-0.5 flex items-center justify-end gap-1 text-xs font-medium ${stock.positive ? "text-emerald-400" : "text-red-400"
                                    }`}
                            >
                                {stock.positive ? (
                                    <ArrowUpRight size={13} />
                                ) : (
                                    <ArrowDownRight size={13} />
                                )}
                                {stock.change}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WatchlistPanel;