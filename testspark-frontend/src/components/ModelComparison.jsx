import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";
import { mockRuns } from "../mockData";

export default function ModelComparison() {
  const data = mockRuns.map((run, index) => ({
    name: `Run ${index + 1}`,
    AIME: run.benchmarkScores.AIME,
    MMLU: run.benchmarkScores.MMLU,
    MSUR: run.benchmarkScores.MSUR
  }));

  return (
    <div style={{ width: "100%", height: "350px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#94A3B8" />
          <YAxis stroke="#94A3B8" />
          <Tooltip />
          <Legend />
          <Bar dataKey="AIME" fill="#3B82F6" />
          <Bar dataKey="MMLU" fill="#22C55E" />
          <Bar dataKey="MSUR" fill="#F59E0B" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}