const Sidebar = () => {
    return (
        <aside className="w-64 h-screen bg-[#0D1117] border-r border-[#1F2937]">
            <div className="p-8">
                <h1 className="text-2xl font-bold text-white">
                    Quant<span className="text-cyan-400">View</span>
                </h1>
            </div>

            <nav className="px-4">
                <ul className="space-y-2">
                    {[
                        "Dashboard",
                        "Markets",
                        "Stocks",
                        "Watchlist",
                        "Portfolio",
                        "Research",
                        "Screener",
                        "Settings",
                    ].map((item) => (
                        <li
                            key={item}
                            className="px-4 py-3 rounded-lg text-gray-400 hover:bg-[#161B22] hover:text-white transition-all duration-200 cursor-pointer"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;