import AttackTrends from "./components/AttackTrends";
import ThreatMap from "./components/ThreatMap";

function App() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold">🛡️ Cloud Security Dashboard</h1>
      <div className="grid grid-cols-2 gap-6 mt-6">
        <AttackTrends />
        <ThreatMap />
      </div>
    </div>
  );
}

export default App;
