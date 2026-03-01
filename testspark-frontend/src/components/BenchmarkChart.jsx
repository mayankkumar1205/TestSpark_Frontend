import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { mockRuns } from "../mockData";

export default function BenchmarkChart() {
  const latestRun = mockRuns[mockRuns.length - 1];

  const data = [
    { name: "AIME", score: latestRun.benchmarkScores.AIME },
    { name: "MMLU", score: latestRun.benchmarkScores.MMLU },
    { name: "MSUR", score: latestRun.benchmarkScores.MSUR }
  ];

  return (
    <div style={{ width: "100%", height: "300px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#94A3B8" />
          <YAxis stroke="#94A3B8" />
          <Tooltip />
          <Bar
            dataKey="score"
            fill="#3B82F6"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}