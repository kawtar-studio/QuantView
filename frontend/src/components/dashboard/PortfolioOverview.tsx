import {
    ResponsiveContainer,
    AreaChart,
    Area,
    Tooltip,
    XAxis,
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
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-b from-zinc-900/70 to-zinc-950/90 p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_24px_-8px_rgba(0,0,0,0.5)] backdrop-blur-xl">
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-[#7C5CFF]/10 blur-3xl" />

            <div className="relative flex items-center justify-between">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                        My Portfolio
                    </p>
                    <h2 className="mt-2 text-[15px] font-semibold tracking-tight text-white">
                        Portfolio Overview
                    </h2>
                </div>

                <div className="text-right">
                    <p className="text-3xl font-bold tracking-tight text-white">
                        $94,850
                    </p>
                    <p className="mt-1 text-sm font-medium text-emerald-400">
                        +$2,315 (+2.50%)
                    </p>
                </div>
            </div>

            <div className="relative mt-8 h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="portfolioGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#7C5CFF" stopOpacity={0.35} />
                                <stop offset="95%" stopColor="#7C5CFF" stopOpacity={0} />
                            </linearGradient>
                        </defs>

                        <XAxis
                            dataKey="month"
                            stroke="#52525b"
                            tickLine={false}
                            axisLine={false}
                            tick={{ fontSize: 12 }}
                        />

                        <Tooltip
                            contentStyle={{
                                backgroundColor: "#111113",
                                border: "1px solid rgba(255,255,255,0.1)",
                                borderRadius: "16px",
                                color: "#fff",
                                boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
                            }}
                            labelStyle={{
                                color: "#a1a1aa",
                                marginBottom: "8px",
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