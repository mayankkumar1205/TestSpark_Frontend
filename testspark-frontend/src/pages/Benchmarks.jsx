import BaseCard from "../components/cards/BaseCard";
import { FlaskConical } from "lucide-react";

const benchmarkData = [
  {
    name: "AIME",
    description: "Mathematical reasoning benchmark with numeric validation.",
    total: 25,
    passRate: 72,
    lastModel: "gpt-4",
  },
  {
    name: "MMLU",
    description: "Multi-domain knowledge benchmark with LLM-judged validation.",
    total: 57,
    passRate: 68,
    lastModel: "llama3.2",
  },
  {
    name: "MSUR",
    description: "Proof-writing benchmark with rubric-based grading.",
    total: 18,
    passRate: 61,
    lastModel: "mixtral",
  },
];

export default function Benchmarks() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Benchmarks</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {benchmarkData.map((b) => (
          <BaseCard key={b.name}>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xl font-semibold">
                <FlaskConical size={18} />
                {b.name}
              </div>

              <p className="text-slate-400 text-sm">
                {b.description}
              </p>

              <div className="space-y-1 text-sm">
                <p><strong>Total Cases:</strong> {b.total}</p>
                <p><strong>Pass Rate:</strong> {b.passRate}%</p>
                <p><strong>Last Model:</strong> {b.lastModel}</p>
              </div>

              <button
                className="w-full bg-accent hover:bg-blue-600 transition py-2 rounded-lg"
                onClick={() => alert(`Testing ${b.name} benchmark...`)}
              >
                Test Benchmark
              </button>
            </div>
          </BaseCard>
        ))}
      </div>
    </div>
  );
}