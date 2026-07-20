import {
    LayoutDashboard,
    Globe,
    TrendingUp,
    Star,
    Briefcase,
    Search,
    FileText,
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
        <aside className="w-64 h-screen bg-zinc-950 border-r border-zinc-800 flex flex-col">
            {/* Logo */}
            <div className="h-16 flex items-center px-6 border-b border-zinc-800">
                <h1 className="text-xl font-bold text-white tracking-tight">
                    QuantView
                </h1>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-3">
                {navigation.map((item) => {
                    const Icon = item.icon;

                    return (
                        <button
                            key={item.name}
                            className={`relative w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${item.active
                                    ? "bg-zinc-900 text-white"
                                    : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                                }`}
                        >
                            {item.active && (
                                <div className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-blue-500" />
                            )}

                            <Icon size={20} strokeWidth={2} />

                            <span className="font-medium">{item.name}</span>
                        </button>
                    );
                })}
            </nav>

            {/* Footer */}
            <div className="border-t border-zinc-800 p-4">
                <p className="text-xs text-zinc-500">
                    QuantView v1.0
                </p>
            </div>
        </aside>
    );
};

export default Sidebar;