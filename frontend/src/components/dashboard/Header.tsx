import {
    Bell,
    ChevronDown,
    Clock3,
    Search,
    Settings,
} from "lucide-react";

const Header = () => {
    return (
        <header className="relative border-b border-white/10 bg-[#0B0B0F]/80 backdrop-blur-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#7C5CFF10,transparent_60%)]" />

            <div className="relative flex items-center justify-between px-8 py-6">
                <div>
                    <div className="mb-3 flex items-center gap-3">
                        <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1">
                            <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(74,222,128,0.9)]" />

                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                                Markets Open
                            </span>
                        </div>

                        <div className="flex items-center gap-2 text-xs tracking-wide text-zinc-500">
                            <Clock3 size={14} />
                            <span>Live Market Data</span>
                        </div>
                    </div>

                    <h1 className="text-4xl font-semibold tracking-tight text-white">
                        Dashboard
                    </h1>

                    <p className="mt-2 text-sm text-zinc-400">
                        Global financial intelligence, portfolio monitoring and market insights.
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <div className="relative">
                        <Search
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                        />

                        <input
                            type="text"
                            placeholder="Search companies, ETFs, crypto..."
                            className="h-12 w-[360px] rounded-2xl border border-white/10 bg-white/[0.04] pl-11 pr-4 text-sm text-white placeholder:text-zinc-500 outline-none transition-all duration-300 focus:border-[#7C5CFF]/60 focus:bg-white/[0.06] focus:shadow-[0_0_25px_rgba(124,92,255,0.18)]"
                        />
                    </div>

                    <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-zinc-400 transition-all duration-300 hover:border-[#7C5CFF]/40 hover:bg-[#7C5CFF]/10 hover:text-white">
                        <Bell size={18} />
                    </button>

                    <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-zinc-400 transition-all duration-300 hover:border-[#7C5CFF]/40 hover:bg-[#7C5CFF]/10 hover:text-white">
                        <Settings size={18} />
                    </button>

                    <button className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-2 transition-all duration-300 hover:border-[#7C5CFF]/40 hover:bg-white/[0.05]">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#7C5CFF] to-[#5B3DFF] text-sm font-semibold text-white shadow-[0_0_25px_rgba(124,92,255,0.35)]">
                            KB
                        </div>

                        <div className="text-left">
                            <p className="text-sm font-medium text-white">
                                Kawtar
                            </p>

                            <p className="text-xs text-zinc-500">
                                Analyst
                            </p>
                        </div>

                        <ChevronDown
                            size={16}
                            className="text-zinc-500"
                        />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;