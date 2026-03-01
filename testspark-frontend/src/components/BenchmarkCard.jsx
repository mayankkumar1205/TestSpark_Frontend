import Card from "./Card";
import { Play } from "lucide-react";

export default function BenchmarkCard({
  name,
  description,
  totalCases,
  passRate,
  lastModel,
  onTest,
}) {
  return (
    <Card className="flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-400 text-sm mt-2">{description}</p>

        <div className="mt-6 space-y-2 text-sm">
          <p><span className="text-gray-400">Total Cases:</span> {totalCases}</p>
          <p><span className="text-gray-400">Pass Rate:</span> {passRate}%</p>
          <p><span className="text-gray-400">Last Model:</span> {lastModel}</p>
        </div>
      </div>

      <button
        onClick={onTest}
        className="mt-6 bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-xl flex items-center justify-center gap-2"
      >
        <Play size={16} />
        Test Benchmark
      </button>
    </Card>
  );
}