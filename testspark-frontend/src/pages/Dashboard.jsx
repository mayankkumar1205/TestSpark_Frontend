import MetricCard from "../components/MetricCard";
import BenchmarkChart from "../components/BenchmarkChart";
import PerformanceChart from "../components/PerformanceChart";
import ModelComparison from "../components/ModelComparison";
import Card from "../components/Card";
import { mockRuns } from "../mockData";

export default function Dashboard() {
  const runs = mockRuns;

  // --- Calculations ---
  const totalRuns = runs.length;

  const avgScore =
    runs.length > 0
      ? (
          runs.reduce((sum, run) => sum + run.averageScore, 0) /
          runs.length
        ).toFixed(2)
      : 0;

  const passRate =
    runs.length > 0
      ? (
          (runs.filter((run) => run.passed).length /
            runs.length) *
          100
        ).toFixed(0)
      : 0;

  const activeRuns = runs.filter(
    (run) => run.status === "running"
  ).length;

  return (
    <div>
      <h1 style={{ marginBottom: "40px", fontSize: "28px" }}>
        Dashboard
      </h1>
<Card title="AI Evaluation Engine Overview">
  <div style={{ display: "flex", justifyContent: "space-between" }}>
    <div>
      <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>
        Model Performance Score
      </h2>
      <p style={{ fontSize: "40px", fontWeight: "bold", color: "#22C55E" }}>
        {avgScore} / 10
      </p>
      <p>Overall system benchmark accuracy</p>
    </div>

    <div>
      <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>
        Pass Rate
      </h2>
      <p style={{ fontSize: "40px", fontWeight: "bold", color: "#3B82F6" }}>
        {passRate}%
      </p>
      <p>Across all evaluation runs</p>
    </div>
  </div>
</Card>

      {/* Metric Cards */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginBottom: "40px"
        }}
      >
        <MetricCard
          title="Total Evaluation Runs"
          value={totalRuns}
          color="#3B82F6"
        />
        <MetricCard
          title="Average Score"
          value={`${avgScore} / 10`}
          color="#22C55E"
        />
        <MetricCard
          title="Benchmark Pass Rate"
          value={`${passRate}%`}
          color="#F59E0B"
        />
        <MetricCard
          title="Active Runs"
          value={activeRuns}
          color="#EF4444"
        />
      </div>

      {/* Charts Section */}
      <Card title="Benchmark Accuracy (Latest Run)">
        <BenchmarkChart />
      </Card>

      <Card title="Performance Over Time">
        <PerformanceChart />
      </Card>

      <Card title="Model Comparison Across Runs">
        <ModelComparison />
      </Card>

      <Card title="Why TestSpark Matters">
  <ul>
    <li> Detect hallucinations in LLM outputs</li>
    <li> Compare models across standardized benchmarks</li>
    <li> Evaluate robustness using ambiguity & contradiction tests</li>
    <li> Provide automated AI judging & scoring</li>
  </ul>
</Card>
    </div>
    
  );
}