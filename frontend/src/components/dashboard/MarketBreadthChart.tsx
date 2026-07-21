import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
} from "recharts";

const data = [
    { name: "Advancing", value: 62 },
    { name: "Declining", value: 28 },
    { name: "Unchanged", value: 10 },
];

const COLORS = [
    "#22C55E",
    "#EF4444",
    "#7C5CFF",
];

const MarketBreadthChart = () => {
    return (
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-white">
                Market Breadth
            </h2>

            <div className="mt-6 h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            innerRadius={70}
                            outerRadius={95}
                            paddingAngle={4}
                            dataKey="value"
                        >
                            {data.map((_, index) => (
                                <Cell
                                    key={index}
                                    fill={COLORS[index]}
                                />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>

            <div className="space-y-3">

                <div className="flex items-center justify-between">
                    <span className="text-zinc-400">
                        Advancing
                    </span>

                    <span className="font-semibold text-emerald-400">
                        62%
                    </span>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-zinc-400">
                        Declining
                    </span>

                    <span className="font-semibold text-red-400">
                        28%
                    </span>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-zinc-400">
                        Unchanged
                    </span>

                    <span className="font-semibold text-violet-400">
                        10%
                    </span>
                </div>

            </div>
        </div>
    );
};

export default MarketBreadthChart;