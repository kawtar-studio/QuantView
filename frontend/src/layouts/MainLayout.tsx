import Sidebar from "../components/layout/Sidebar";

type MainLayoutProps = {
    children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="flex min-h-screen bg-[#0B0F19]">
            <Sidebar />

            <main className="flex-1 p-8">
                {children}
            </main>
        </div>
    );
};

export default MainLayout;