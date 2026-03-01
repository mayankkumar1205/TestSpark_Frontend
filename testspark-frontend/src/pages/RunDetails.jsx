import { useParams } from "react-router-dom";
import Card from "../components/Card";
import StatusBadge from "../components/StatusBadge";
import { mockEvalRuns, mockRuns } from "../mockData";

export default function RunDetails() {
  const { id } = useParams();

  const run = mockEvalRuns.find((r) => r.id === id);

  if (!run) {
    return <div>Run not found</div>;
  }

  // Simulated detailed benchmark data (using latest mockRuns)
  const benchmarkData = mockRuns[mockRuns.length - 1];

  return (
    <div>
      <h1 style={{ marginBottom: "30px", fontSize: "28px" }}>
        Run Details — {run.id}
      </h1>

      <Card title="Run Overview">
        <p><strong>Model:</strong> {run.model}</p>
        <p><strong>Status:</strong> {run.status}</p>
        <p><strong>Score:</strong> {run.averageScore} / 10</p>
        <p><strong>Created At:</strong> {run.createdAt}</p>

        {run.status === "completed" && (
          <StatusBadge passed={run.passed} />
        )}
      </Card>

      <Card title="Benchmark Breakdown">
        <p>AIME: {benchmarkData.benchmarkScores.AIME}%</p>
        <p>MMLU: {benchmarkData.benchmarkScores.MMLU}%</p>
        <p>MSUR: {benchmarkData.benchmarkScores.MSUR}%</p>
      </Card>

      <Card title="Insights">
        <ul>
          <li>Model performs strongest on AIME reasoning.</li>
          <li>Moderate performance in MSUR proof construction.</li>
          <li>Recommend lowering temperature for consistency.</li>
        </ul>
      </Card>
    </div>
  );
}