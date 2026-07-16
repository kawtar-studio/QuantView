import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <MainLayout>
      <div>
        <h1 className="text-4xl font-bold text-white">
          Welcome to QuantView
        </h1>

        <p className="mt-4 text-gray-400">
          Professional Financial Dashboard
        </p>
      </div>
    </MainLayout>
  );
}

export default App;