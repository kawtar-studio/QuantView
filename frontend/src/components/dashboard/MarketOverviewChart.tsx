import {
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";

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
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-lg">
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-white">
                    Market Overview
                </h2>

                <div className="flex gap-2">
                    <button className="rounded-lg bg-indigo-600 px-3 py-1 text-sm text-white">
                        1D
                    </button>

                    <button className="rounded-lg px-3 py-1 text-sm text-zinc-400 hover:bg-zinc-800">
                        1W
                    </button>

                    <button className="rounded-lg px-3 py-1 text-sm text-zinc-400 hover:bg-zinc-800">
                        1M
                    </button>
                </div>
            </div>

            <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <CartesianGrid
                            stroke="#27272a"
                            vertical={false}
                        />

                        <XAxis
                            dataKey="time"
                            stroke="#71717a"
                            tickLine={false}
                            axisLine={false}
                        />

                        <YAxis
                            stroke="#71717a"
                            tickLine={false}
                            axisLine={false}
                        />

                        <Tooltip
                            contentStyle={{
                                backgroundColor: "#18181b",
                                border: "1px solid #3f3f46",
                                borderRadius: "12px",
                                color: "#fff",
                            }}
                        />

                        <Line
                            type="monotone"
                            dataKey="sp500"
                            stroke="#7C5CFF"
                            strokeWidth={3}
                            dot={false}
                        />

                        <Line
                            type="monotone"
                            dataKey="nasdaq"
                            stroke="#3B82F6"
                            strokeWidth={3}
                            dot={false}
                        />

                        <Line
                            type="monotone"
                            dataKey="dow"
                            stroke="#F59E0B"
                            strokeWidth={3}
                            dot={false}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default MarketOverviewChart;