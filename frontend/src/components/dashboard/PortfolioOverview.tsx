import {
    ResponsiveContainer,
    AreaChart,
    Area,
    Tooltip,
} from "recharts";

const data = [
    { month: "Jan", value: 82000 },
    { month: "Feb", value: 84500 },
    { month: "Mar", value: 83200 },
    { month: "Apr", value: 87100 },
    { month: "May", value: 90200 },
    { month: "Jun", value: 92500 },
    { month: "Jul", value: 94850 },
];

const PortfolioOverview = () => {
    return (
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-lg">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-semibold text-white">
                        Portfolio Overview
                    </h2>

                    <p className="mt-1 text-sm text-zinc-500">
                        Total Portfolio Value
                    </p>
                </div>

                <div className="text-right">
                    <p className="text-3xl font-bold text-white">
                        $94,850
                    </p>

                    <p className="mt-1 text-sm font-medium text-emerald-400">
                        +$2,315 (+2.50%)
                    </p>
                </div>
            </div>

            <div className="mt-8 h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="portfolioGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#7C5CFF" stopOpacity={0.4} />
                                <stop offset="95%" stopColor="#7C5CFF" stopOpacity={0} />
                            </linearGradient>
                        </defs>

                        <Tooltip
                            contentStyle={{
                                backgroundColor: "#18181b",
                                border: "1px solid #3f3f46",
                                borderRadius: "12px",
                                color: "#fff",
                            }}
                        />

                        <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#7C5CFF"
                            strokeWidth={3}
                            fill="url(#portfolioGradient)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default PortfolioOverview;