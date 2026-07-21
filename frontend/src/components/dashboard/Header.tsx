const Header = () => {
    return (
        <header className="border-b border-zinc-800 bg-zinc-950 px-8 py-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white">
                        Dashboard
                    </h1>

                    <p className="mt-1 text-zinc-400">
                        Welcome back. Track the global financial markets in real time.
                    </p>
                </div>

                <div className="w-80">
                    <input
                        type="text"
                        placeholder="Search stocks..."
                        className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white placeholder:text-zinc-500 outline-none transition focus:border-blue-500"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;