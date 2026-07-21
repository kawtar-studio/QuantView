import Sidebar from "../components/layout/Sidebar";
import Header from "../components/dashboard/Header";
import MarketCard from "../components/dashboard/MarketCard";
import MarketOverviewChart from "../components/dashboard/MarketOverviewChart";
import MarketBreadthChart from "../components/dashboard/MarketBreadthChart";
import WatchlistPanel from "../components/dashboard/WatchlistPanel";
import NewsPanel from "../components/dashboard/NewsPanel";
import TopMovers from "../components/dashboard/TopMovers";

const MainLayout = () => {
    return (
        <div className="flex h-screen bg-zinc-950">
            <Sidebar />

            <div className="flex flex-1 flex-col overflow-hidden">
                <Header />

                <main className="flex-1 overflow-y-auto p-8">

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

                    {/* Dashboard Layout */}
                    <div className="mt-8 grid grid-cols-12 gap-6">

                        {/* Left Side */}
                        <div className="col-span-8">
                            <MarketOverviewChart />
                        </div>

                        {/* Right Side */}
                        <div className="col-span-4 space-y-6">
                            <MarketBreadthChart />
                            <WatchlistPanel />
                            <NewsPanel />
                        </div>

                    </div>

                    {/* Bottom Section */}
                    <div className="mt-8 grid grid-cols-12 gap-6">

                        <div className="col-span-6">
                            <TopMovers />
                        </div>

                        <div className="col-span-6 rounded-2xl border border-dashed border-zinc-700 p-8 text-center text-zinc-500">
                            Portfolio Overview (Coming Next)
                        </div>

                    </div>

                </main>
            </div>
        </div>
    );
};

export default MainLayout;