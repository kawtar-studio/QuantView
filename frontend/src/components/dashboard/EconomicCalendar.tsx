const events = [
    {
        time: "08:30",
        country: "🇺🇸",
        event: "Non-Farm Payrolls",
        impact: "High",
    },
    {
        time: "10:00",
        country: "🇪🇺",
        event: "ECB Interest Rate Decision",
        impact: "High",
    },
    {
        time: "11:30",
        country: "🇬🇧",
        event: "Manufacturing PMI",
        impact: "Medium",
    },
    {
        time: "14:00",
        country: "🇺🇸",
        event: "Fed Chair Speech",
        impact: "High",
    },
    {
        time: "16:00",
        country: "🇯🇵",
        event: "GDP Growth Rate",
        impact: "Low",
    },
];

const EconomicCalendar = () => {
    return (
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-lg">
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-white">
                    Economic Calendar
                </h2>

                <button className="text-sm text-violet-400 hover:text-violet-300">
                    View all
                </button>
            </div>

            <div className="space-y-4">
                {events.map((event) => (
                    <div
                        key={`${event.time}-${event.event}`}
                        className="flex items-center justify-between rounded-xl border border-zinc-800 p-4 transition hover:border-zinc-700 hover:bg-zinc-800/40"
                    >
                        <div className="flex items-center gap-4">
                            <span className="text-lg">
                                {event.country}
                            </span>

                            <div>
                                <p className="font-medium text-white">
                                    {event.event}
                                </p>

                                <p className="text-sm text-zinc-500">
                                    {event.time}
                                </p>
                            </div>
                        </div>

                        <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold ${event.impact === "High"
                                    ? "bg-red-500/15 text-red-400"
                                    : event.impact === "Medium"
                                        ? "bg-yellow-500/15 text-yellow-400"
                                        : "bg-emerald-500/15 text-emerald-400"
                                }`}
                        >
                            {event.impact}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EconomicCalendar;