import Sidebar from "../components/layout/Sidebar";
import Header from "../components/dashboard/Header";
import MarketCard from "../components/dashboard/MarketCard";
import MarketOverviewChart from "../components/dashboard/MarketOverviewChart";
import MarketBreadthChart from "../components/dashboard/MarketBreadthChart";
import WatchlistPanel from "../components/dashboard/WatchlistPanel";
import NewsPanel from "../components/dashboard/NewsPanel";
import TopMovers from "../components/dashboard/TopMovers";
import PortfolioOverview from "../components/dashboard/PortfolioOverview";
import EconomicCalendar from "../components/dashboard/EconomicCalendar";

const MainLayout = () => {
    return (
        <div className="flex h-screen overflow-hidden bg-[#09090B] text-white">
            <Sidebar />

            <div className="relative flex flex-1 flex-col overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-56 left-1/3 h-[520px] w-[520px] rounded-full bg-[#7C5CFF]/10 blur-[170px]" />
                    <div className="absolute bottom-0 right-[-120px] h-[420px] w-[420px] rounded-full bg-violet-500/5 blur-[180px]" />
                </div>

                <Header />

                <main className="relative flex-1 overflow-y-auto px-8 py-8">
                    <div className="mx-auto max-w-[1800px] space-y-8">
                        <section className="grid grid-cols-4 gap-6">
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
                        </section>

                        <section className="grid grid-cols-12 gap-6">
                            <div className="col-span-8">
                                <MarketOverviewChart />
                            </div>

                            <div className="col-span-4 flex flex-col gap-6">
                                <MarketBreadthChart />
                                <WatchlistPanel />
                                <NewsPanel />
                            </div>
                        </section>

                        <section className="grid grid-cols-12 gap-6">
                            <div className="col-span-5">
                                <TopMovers />
                            </div>

                            <div className="col-span-7">
                                <PortfolioOverview />
                            </div>
                        </section>

                        <section className="pb-8">
                            <EconomicCalendar />
                        </section>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default MainLayout;