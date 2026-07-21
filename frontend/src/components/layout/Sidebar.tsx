import {
    LayoutDashboard,
    Globe,
    TrendingUp,
    Star,
    Briefcase,
    Search,
    FileText,
    LineChart,
} from "lucide-react";

const navigation = [
    {
        name: "Dashboard",
        icon: LayoutDashboard,
        active: true,
    },
    {
        name: "Markets",
        icon: Globe,
        active: false,
    },
    {
        name: "Stocks",
        icon: TrendingUp,
        active: false,
    },
    {
        name: "Watchlist",
        icon: Star,
        active: false,
    },
    {
        name: "Portfolio",
        icon: Briefcase,
        active: false,
    },
    {
        name: "Screener",
        icon: Search,
        active: false,
    },
    {
        name: "Research",
        icon: FileText,
        active: false,
    },
];

const Sidebar = () => {
    return (
        <aside className="relative flex h-screen w-[280px] flex-col border-r border-white/10 bg-[#0B0B0F]/90 backdrop-blur-2xl">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#7C5CFF14,transparent_45%)]" />

            <div className="relative flex h-24 items-center border-b border-white/10 px-7">
                <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#8B72FF]/20 bg-gradient-to-br from-[#7C5CFF] to-[#5B3DFF] shadow-[0_0_35px_rgba(124,92,255,0.35)]">
                        <LineChart size={22} className="text-white" />
                    </div>

                    <div>
                        <h1 className="text-xl font-semibold tracking-tight text-white">
                            QuantView
                        </h1>

                        <p className="mt-1 text-xs font-medium uppercase tracking-[0.22em] text-zinc-500">
                            Financial Intelligence
                        </p>
                    </div>
                </div>
            </div>

            <nav className="relative flex-1 px-5 py-8">
                <div className="mb-5 px-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-600">
                    Workspace
                </div>

                <div className="space-y-2">
                    {navigation.map((item) => {
                        const Icon = item.icon;

                        return (
                            <button
                                key={item.name}
                                className={`group relative flex w-full items-center gap-4 overflow-hidden rounded-2xl px-4 py-3.5 transition-all duration-300 ${item.active
                                        ? "border border-[#7C5CFF]/25 bg-gradient-to-r from-[#7C5CFF]/20 to-transparent text-white shadow-[0_10px_40px_rgba(124,92,255,0.18)]"
                                        : "border border-transparent text-zinc-400 hover:border-white/10 hover:bg-white/[0.03] hover:text-white"
                                    }`}
                            >
                                {item.active && (
                                    <div className="absolute left-0 top-3 bottom-3 w-[3px] rounded-r-full bg-[#7C5CFF]" />
                                )}

                                <div
                                    className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 ${item.active
                                            ? "bg-[#7C5CFF]/20 text-[#B6A4FF]"
                                            : "bg-white/[0.03] text-zinc-500 group-hover:bg-white/[0.06] group-hover:text-zinc-200"
                                        }`}
                                >
                                    <Icon size={18} />
                                </div>

                                <span className="text-[15px] font-medium tracking-wide">
                                    {item.name}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </nav>

            <div className="relative border-t border-white/10 p-5">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-semibold text-white">
                                QuantView
                            </p>

                            <p className="mt-1 text-xs text-zinc-500">
                                Version 1.0
                            </p>
                        </div>

                        <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.8)]" />
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;