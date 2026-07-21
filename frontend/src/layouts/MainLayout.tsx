import Sidebar from "../components/layout/Sidebar";
import Header from "../components/dashboard/Header";
import Card from "../components/ui/Card";

const MainLayout = () => {
    return (
        <div className="flex h-screen bg-zinc-950">
            <Sidebar />

            <div className="flex flex-1 flex-col">
                <Header />

                <main className="flex-1 overflow-auto p-8">

                    <div className="grid grid-cols-4 gap-6">

                        <Card title="S&P 500">
                            <p className="text-3xl font-bold text-white">
                                6,438.72
                            </p>

                            <p className="mt-2 text-green-400">
                                +1.28%
                            </p>
                        </Card>

                        <Card title="Nasdaq">
                            <p className="text-3xl font-bold text-white">
                                21,102.53
                            </p>

                            <p className="mt-2 text-green-400">
                                +0.94%
                            </p>
                        </Card>

                        <Card title="Dow Jones">
                            <p className="text-3xl font-bold text-white">
                                44,182.17
                            </p>

                            <p className="mt-2 text-green-400">
                                +0.61%
                            </p>
                        </Card>

                        <Card title="Bitcoin">
                            <p className="text-3xl font-bold text-white">
                                $118,420
                            </p>

                            <p className="mt-2 text-red-400">
                                -0.82%
                            </p>
                        </Card>

                    </div>

                </main>
            </div>
        </div>
    );
};

export default MainLayout;