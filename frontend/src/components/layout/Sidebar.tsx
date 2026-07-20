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
    },
    {
        name: "Markets",
        icon: Globe,
    },
    {
        name: "Stocks",
        icon: TrendingUp,
    },
    {
        name: "Watchlist",
        icon: Star,
    },
    {
        name: "Portfolio",
        icon: Briefcase,
    },
    {
        name: "Screener",
        icon: Search,
    },
    {
        name: "Research",
        icon: FileText,
    },
];

const Sidebar = () => {
    return (
        <aside className="w-64 h-screen bg-zinc-950 border-r border-zinc-800 flex flex-col">
            {/* Logo */}
            <div className="h-16 flex items-center px-6 border-b border-zinc-800">
                <h1 className="text-xl font-bold text-white">
                    QuantView
                </h1>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4">
                {navigation.map((item) => {
                    const Icon = item.icon;

                    return (
                        <button
                            key={item.name}
                            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-zinc-300 hover:bg-zinc-900 hover:text-white transition-colors"
                        >
                            <Icon size={20} />

                            <span>{item.name}</span>
                        </button>
                    );
                })}
            </nav>

            {/* Footer */}
            <div className="p-4 border-t border-zinc-800">
                <p className="text-sm text-zinc-500">
                    Version 1.0
                </p>
            </div>
        </aside>
    );
};

export default Sidebar;