import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { ChevronRight } from "lucide-react";

interface BreadthSegment {
    name: string;
    value: number;
    color: string;
}

const data: BreadthSegment[] = [
    { name: "Advancing", value: 4682, color: "#22C55E" },
    { name: "Declining", value: 3352, color: "#EF4444" },
    { name: "Unchanged", value: 458, color: "#52525B" },
];

const total = data.reduce((sum, segment) => sum + segment.value, 0);

const formatNumber = (value: number) => value.toLocaleString("en-US");

const formatPercent = (value: number) => ((value / total) * 100).toFixed(1);

const MarketBreadthChart = () => {
    return (
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-b from-zinc-900/70 to-zinc-950/90 p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_24px_-8px_rgba(0,0,0,0.5)] backdrop-blur-xl">
            <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-[#7C5CFF]/10 blur-3xl" />

            <div className="relative flex items-center justify-between">
                <h2 className="text-[15px] font-semibold tracking-tight text-white">
                    Market Breadth
                </h2>
                <button className="flex h-6 w-6 items-center justify-center rounded-md text-zinc-500 transition-colors hover:bg-white/5 hover:text-zinc-300">
                    <ChevronRight size={16} />
                </button>
            </div>

            <div className="relative mt-6 flex items-center gap-6">
                <div className="relative h-[132px] w-[132px] shrink-0">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                innerRadius={44}
                                outerRadius={62}
                                paddingAngle={3}
                                dataKey="value"
                                stroke="none"
                            >
                                {data.map((segment) => (
                                    <Cell key={segment.name} fill={segment.color} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-[10px] font-medium uppercase tracking-wider text-zinc-500">
                            Total Stocks
                        </span>
                        <span className="mt-1 text-xl font-bold text-white">
                            {formatNumber(total)}
                        </span>
                    </div>
                </div>

                <div className="flex-1 space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span
                                className="h-2 w-2 rounded-full"
                                style={{ backgroundColor: data[0].color }}
                            />
                            <span className="text-sm text-zinc-400">Advancing</span>
                        </div>
                        <span className="text-sm font-semibold text-emerald-400">
                            {formatNumber(data[0].value)}
                        </span>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span
                                className="h-2 w-2 rounded-full"
                                style={{ backgroundColor: data[1].color }}
                            />
                            <span className="text-sm text-zinc-400">Declining</span>
                        </div>
                        <span className="text-sm font-semibold text-red-400">
                            {formatNumber(data[1].value)}{" "}
                            <span className="text-xs font-normal text-zinc-500">
                                ({formatPercent(data[1].value)}%)
                            </span>
                        </span>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span
                                className="h-2 w-2 rounded-full"
                                style={{ backgroundColor: data[2].color }}
                            />
                            <span className="text-sm text-zinc-400">Unchanged</span>
                        </div>
                        <span className="text-sm font-semibold text-zinc-300">
                            {formatNumber(data[2].value)}{" "}
                            <span className="text-xs font-normal text-zinc-500">
                                ({formatPercent(data[2].value)}%)
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarketBreadthChart;