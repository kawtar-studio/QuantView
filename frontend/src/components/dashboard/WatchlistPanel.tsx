import {
    ArrowDownRight,
    ArrowUpRight,
} from "lucide-react";

const watchlist = [
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
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-lg">
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-white">
                    Watchlist
                </h2>

                <span className="text-sm text-zinc-500">
                    5 Assets
                </span>
            </div>

            <div className="space-y-4">
                {watchlist.map((stock) => (
                    <div
                        key={stock.symbol}
                        className="flex items-center justify-between rounded-xl p-3 transition-colors hover:bg-zinc-800/60"
                    >
                        <div>
                            <h3 className="font-semibold text-white">
                                {stock.symbol}
                            </h3>

                            <p className="text-sm text-zinc-500">
                                {stock.name}
                            </p>
                        </div>

                        <div className="text-right">
                            <p className="font-semibold text-white">
                                {stock.price}
                            </p>

                            <div
                                className={`mt-1 flex items-center justify-end gap-1 text-sm ${stock.positive
                                        ? "text-emerald-400"
                                        : "text-red-400"
                                    }`}
                            >
                                {stock.positive ? (
                                    <ArrowUpRight size={15} />
                                ) : (
                                    <ArrowDownRight size={15} />
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