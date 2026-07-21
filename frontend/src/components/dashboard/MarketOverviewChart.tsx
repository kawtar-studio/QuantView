import {
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";
import Card from "../ui/Card";

const data = [
    { time: "09:30", sp500: 5200, nasdaq: 18200, dow: 39200 },
    { time: "10:00", sp500: 5225, nasdaq: 18350, dow: 39320 },
    { time: "10:30", sp500: 5215, nasdaq: 18310, dow: 39290 },
    { time: "11:00", sp500: 5240, nasdaq: 18420, dow: 39410 },
    { time: "11:30", sp500: 5265, nasdaq: 18510, dow: 39520 },
    { time: "12:00", sp500: 5250, nasdaq: 18460, dow: 39460 },
    { time: "12:30", sp500: 5275, nasdaq: 18570, dow: 39600 },
    { time: "13:00", sp500: 5290, nasdaq: 18630, dow: 39680 },
    { time: "13:30", sp500: 5280, nasdaq: 18600, dow: 39620 },
    { time: "14:00", sp500: 5305, nasdaq: 18720, dow: 39740 },
    { time: "14:30", sp500: 5315, nasdaq: 18790, dow: 39810 },
    { time: "15:00", sp500: 5330, nasdaq: 18850, dow: 39890 },
    { time: "15:30", sp500: 5345, nasdaq: 18920, dow: 39960 },
    { time: "16:00", sp500: 5360, nasdaq: 19010, dow: 40050 },
];

const MarketOverviewChart = () => {
    return (
        <Card>
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
                            Global Markets
                        </p>

                        <h2 className="mt-2 text-xl font-semibold tracking-tight text-white">
                            Market Overview
                        </h2>
                    </div>

                    <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-1">
                        {["1D", "1W", "1M", "6M", "1Y"].map((period, index) => (
                            <button
                                key={period}
                                className={`rounded-xl px-4 py-2 text-xs font-medium transition-all duration-300 ${index === 0
                                        ? "bg-[#7C5CFF] text-white shadow-[0_0_20px_rgba(124,92,255,0.35)]"
                                        : "text-zinc-500 hover:bg-white/[0.05] hover:text-white"
                                    }`}
                            >
                                {period}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="h-[360px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                            <CartesianGrid
                                stroke="rgba(255,255,255,0.06)"
                                vertical={false}
                            />

                            <XAxis
                                dataKey="time"
                                stroke="#52525b"
                                tickLine={false}
                                axisLine={false}
                                tick={{
                                    fontSize: 12,
                                }}
                            />

                            <YAxis
                                stroke="#52525b"
                                tickLine={false}
                                axisLine={false}
                                tick={{
                                    fontSize: 12,
                                }}
                            />

                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "#111113",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    borderRadius: "16px",
                                    color: "#fff",
                                    boxShadow:
                                        "0 20px 50px rgba(0,0,0,0.5)",
                                }}
                                labelStyle={{
                                    color: "#a1a1aa",
                                    marginBottom: "8px",
                                }}
                            />

                            <Line
                                type="monotone"
                                dataKey="sp500"
                                stroke="#7C5CFF"
                                strokeWidth={3}
                                dot={false}
                                activeDot={{
                                    r: 5,
                                }}
                            />

                            <Line
                                type="monotone"
                                dataKey="nasdaq"
                                stroke="#60A5FA"
                                strokeWidth={2.5}
                                dot={false}
                            />

                            <Line
                                type="monotone"
                                dataKey="dow"
                                stroke="#FBBF24"
                                strokeWidth={2.5}
                                dot={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                <div className="flex items-center gap-6 border-t border-white/10 pt-5">
                    <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#7C5CFF]" />
                        <span className="text-xs text-zinc-400">
                            S&P 500
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-blue-400" />
                        <span className="text-xs text-zinc-400">
                            Nasdaq
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                        <span className="text-xs text-zinc-400">
                            Dow Jones
                        </span>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default MarketOverviewChart;