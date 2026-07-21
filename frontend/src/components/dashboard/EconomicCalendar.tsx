import { ChevronRight } from "lucide-react";

interface EconomicEvent {
    time: string;
    country: string;
    countryCode: string;
    event: string;
    impact: "High" | "Medium" | "Low";
    actual: string;
    forecast: string;
    previous: string;
}

const events: EconomicEvent[] = [
    {
        time: "08:30 AM",
        country: "🇺🇸",
        countryCode: "US",
        event: "Non-Farm Payrolls",
        impact: "High",
        actual: "206K",
        forecast: "190K",
        previous: "185K",
    },
    {
        time: "10:00 AM",
        country: "🇪🇺",
        countryCode: "EU",
        event: "ECB Interest Rate Decision",
        impact: "High",
        actual: "4.25%",
        forecast: "4.25%",
        previous: "4.50%",
    },
    {
        time: "11:30 AM",
        country: "🇬🇧",
        countryCode: "GB",
        event: "Manufacturing PMI",
        impact: "Medium",
        actual: "51.2",
        forecast: "50.8",
        previous: "50.3",
    },
    {
        time: "02:00 PM",
        country: "🇺🇸",
        countryCode: "US",
        event: "Fed Chair Speech",
        impact: "High",
        actual: "—",
        forecast: "—",
        previous: "—",
    },
    {
        time: "04:00 PM",
        country: "🇯🇵",
        countryCode: "JP",
        event: "GDP Growth Rate",
        impact: "Low",
        actual: "0.8%",
        forecast: "0.6%",
        previous: "0.4%",
    },
];

const impactColor: Record<EconomicEvent["impact"], string> = {
    High: "#EF4444",
    Medium: "#F59E0B",
    Low: "#22C55E",
};

const EconomicCalendar = () => {
    return (
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-b from-zinc-900/70 to-zinc-950/90 p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_24px_-8px_rgba(0,0,0,0.5)] backdrop-blur-xl">
            <div className="pointer-events-none absolute -top-24 -left-24 h-56 w-56 rounded-full bg-[#7C5CFF]/10 blur-3xl" />

            <div className="relative mb-5 flex items-center justify-between">
                <h2 className="text-[15px] font-semibold tracking-tight text-white">
                    Economic Calendar
                </h2>
                <button className="flex items-center gap-1 text-xs font-medium text-[#7C5CFF] transition-colors hover:text-[#9B84FF]">
                    View Calendar
                    <ChevronRight size={14} />
                </button>
            </div>

            <div className="relative">
                <div className="grid grid-cols-[88px_36px_1fr_84px_84px_84px] gap-x-4 border-b border-white/[0.06] pb-3 text-[11px] font-medium uppercase tracking-wider text-zinc-500">
                    <span>Time</span>
                    <span></span>
                    <span>Event</span>
                    <span className="text-right">Actual</span>
                    <span className="text-right">Forecast</span>
                    <span className="text-right">Previous</span>
                </div>

                <div className="divide-y divide-white/[0.05]">
                    {events.map((item) => (
                        <div
                            key={`${item.time}-${item.event}`}
                            className="grid grid-cols-[88px_36px_1fr_84px_84px_84px] items-center gap-x-4 py-3.5 transition-colors hover:bg-white/[0.03]"
                        >
                            <span className="text-sm text-zinc-400">{item.time}</span>
                            <span className="text-base leading-none">{item.country}</span>
                            <div className="flex items-center gap-2">
                                <span
                                    className="h-1.5 w-1.5 shrink-0 rounded-full"
                                    style={{ backgroundColor: impactColor[item.impact] }}
                                />
                                <span className="truncate text-sm font-medium text-white">
                                    {item.event}
                                </span>
                            </div>
                            <span className="text-right text-sm font-semibold text-white">
                                {item.actual}
                            </span>
                            <span className="text-right text-sm text-zinc-400">
                                {item.forecast}
                            </span>
                            <span className="text-right text-sm text-zinc-400">
                                {item.previous}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EconomicCalendar;