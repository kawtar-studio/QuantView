const movers = [
    {
        symbol: "NVDA",
        company: "NVIDIA",
        price: "$182.13",
        change: "+4.21%",
        positive: true,
    },
    {
        symbol: "AAPL",
        company: "Apple",
        price: "$212.41",
        change: "+2.13%",
        positive: true,
    },
    {
        symbol: "MSFT",
        company: "Microsoft",
        price: "$537.88",
        change: "+1.65%",
        positive: true,
    },
    {
        symbol: "TSLA",
        company: "Tesla",
        price: "$297.64",
        change: "-2.54%",
        positive: false,
    },
    {
        symbol: "META",
        company: "Meta",
        price: "$714.22",
        change: "+0.98%",
        positive: true,
    },
];

const TopMovers = () => {
    return (
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-lg">

            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-white">
                    Top Movers
                </h2>

                <button className="text-sm text-violet-400 hover:text-violet-300">
                    View all
                </button>
            </div>

            <div className="space-y-4">

                {movers.map((stock) => (

                    <div
                        key={stock.symbol}
                        className="flex items-center justify-between rounded-xl p-3 transition hover:bg-zinc-800/50"
                    >

                        <div>
                            <h3 className="font-semibold text-white">
                                {stock.symbol}
                            </h3>

                            <p className="text-sm text-zinc-500">
                                {stock.company}
                            </p>
                        </div>

                        <div className="text-right">

                            <p className="font-semibold text-white">
                                {stock.price}
                            </p>

                            <p
                                className={`text-sm font-medium ${stock.positive
                                        ? "text-emerald-400"
                                        : "text-red-400"
                                    }`}
                            >
                                {stock.change}
                            </p>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
};

export default TopMovers;