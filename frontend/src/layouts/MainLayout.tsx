import Sidebar from "../components/layout/Sidebar";
import Header from "../components/dashboard/Header";
import MarketCard from "../components/dashboard/MarketCard";

const MainLayout = () => {
    return (
        <div className="flex h-screen bg-zinc-950">
            <Sidebar />

            <div className="flex flex-1 flex-col">
                <Header />

                <main className="flex-1 overflow-auto p-8">
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
                </main>
            </div>
        </div>
    );
};

export default MainLayout;