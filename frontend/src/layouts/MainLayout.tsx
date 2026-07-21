import Sidebar from "../components/layout/Sidebar";
import Header from "../components/dashboard/Header";
import MarketCard from "../components/dashboard/MarketCard";
import MarketOverviewChart from "../components/dashboard/MarketOverviewChart";

const MainLayout = () => {
    return (
        <div className="flex h-screen bg-zinc-950">
            <Sidebar />

            <div className="flex flex-1 flex-col overflow-hidden">
                <Header />

                <main className="flex-1 overflow-auto p-8">

                    {/* Top Market Cards */}
                    <div className="grid grid-cols-4 gap-6">

                        <MarketCard
                            title="S&P 500"
                            price="6,438.72"
                            change="+1.28%"
                            positive={true}
                        />

                        <MarketCard
                            title="Nasdaq"
                            price="21,102.53"
                            change="+0.94%"
                            positive={true}
                        />

                        <MarketCard
                            title="Dow Jones"
                            price="44,182.17"
                            change="+0.61%"
                            positive={true}
                        />

                        <MarketCard
                            title="Bitcoin"
                            price="$118,420"
                            change="-0.82%"
                            positive={false}
                        />

                    </div>

                    {/* Main Dashboard Content */}
                    <div className="mt-8 grid grid-cols-3 gap-6">

                        {/* Chart */}
                        <div className="col-span-2">
                            <MarketOverviewChart />
                        </div>

                        {/* Placeholder for Market Breadth */}
                        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-lg">
                            <h2 className="text-xl font-semibold text-white">
                                Market Breadth
                            </h2>

                            <div className="mt-6 flex h-80 items-center justify-center rounded-xl border border-dashed border-zinc-700 text-zinc-500">
                                Donut Chart Coming Next
                            </div>
                        </div>

                    </div>

                </main>
            </div>
        </div>
    );
};

export default MainLayout;