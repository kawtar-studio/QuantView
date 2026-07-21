const news = [
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
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-lg">

            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-white">
                    Latest News
                </h2>

                <button className="text-sm text-violet-400 hover:text-violet-300">
                    View all
                </button>
            </div>

            <div className="space-y-5">

                {news.map((item) => (
                    <div
                        key={item.title}
                        className="rounded-xl border border-transparent p-3 transition hover:border-zinc-700 hover:bg-zinc-800/40"
                    >
                        <h3 className="font-medium leading-6 text-white">
                            {item.title}
                        </h3>

                        <div className="mt-2 flex justify-between text-sm text-zinc-500">
                            <span>{item.source}</span>
                            <span>{item.time}</span>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    );
};

export default NewsPanel;