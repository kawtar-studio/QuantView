import { ChevronRight } from "lucide-react";

interface NewsItem {
    title: string;
    source: string;
    time: string;
}

const news: NewsItem[] = [
    {
        title: "Fed signals possible rate cuts later this year",
        source: "Reuters",
        time: "12 min ago",
    },
    {
        title: "NVIDIA reaches another record high after AI demand",
        source: "Bloomberg",
        time: "34 min ago",
    },
    {
        title: "Apple announces expansion of AI features across devices",
        source: "CNBC",
        time: "1 hour ago",
    },
    {
        title: "Oil prices climb as geopolitical tensions increase",
        source: "Financial Times",
        time: "2 hours ago",
    },
];

const NewsPanel = () => {
    return (
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-b from-zinc-900/70 to-zinc-950/90 p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_24px_-8px_rgba(0,0,0,0.5)] backdrop-blur-xl">
            <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-[#7C5CFF]/10 blur-3xl" />

            <div className="relative mb-5 flex items-center justify-between">
                <h2 className="text-[15px] font-semibold tracking-tight text-white">
                    Latest News
                </h2>
                <button className="flex items-center gap-1 text-xs font-medium text-[#7C5CFF] transition-colors hover:text-[#9B84FF]">
                    View all
                    <ChevronRight size={14} />
                </button>
            </div>

            <div className="relative space-y-1.5">
                {news.map((item) => (
                    <div
                        key={item.title}
                        className="rounded-xl border border-transparent p-3 transition-all duration-300 hover:border-white/[0.06] hover:bg-white/[0.03]"
                    >
                        <h3 className="text-sm font-medium leading-5 text-white">
                            {item.title}
                        </h3>

                        <div className="mt-2 flex items-center justify-between text-xs text-zinc-500">
                            <span className="font-medium text-zinc-400">
                                {item.source}
                            </span>
                            <span>{item.time}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsPanel;