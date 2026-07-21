import Sidebar from "../components/layout/Sidebar";
import Header from "../components/dashboard/Header";

const MainLayout = () => {
    return (
        <div className="flex h-screen bg-zinc-950">
            <Sidebar />

            <div className="flex flex-1 flex-col">
                <Header />

                <main className="flex-1 overflow-auto p-8">
                    <h2 className="text-2xl font-semibold text-white">
                        Welcome to QuantView
                    </h2>

                    <p className="mt-2 text-zinc-400">
                        Your financial dashboard will appear here.
                    </p>
                </main>
            </div>
        </div>
    );
};

export default MainLayout;