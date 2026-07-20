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