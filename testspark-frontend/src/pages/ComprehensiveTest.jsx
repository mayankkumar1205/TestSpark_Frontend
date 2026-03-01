import { useState } from "react";
import Card from "../components/Card";
import StatusBadge from "../components/StatusBadge";
import BenchmarkResultChart from "../components/BenchmarkResultChart";
import VariantChart from "../components/VariantChart";

export default function ComprehensiveTest() {
  const [modelName, setModelName] = useState("");
  const [userPrompt, setUserPrompt] = useState("");
  const [samples, setSamples] = useState(3);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleRunTest = () => {
    if (!modelName || !userPrompt) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);
    setResult(null);

    // Simulated backend response
    setTimeout(() => {
      setResult({
        overallVerdict: "EXCELLENT",
        overallAccuracy: 82,
        strengths: [
          "Strong mathematical reasoning",
          "Good response structure"
        ],
        weaknesses: [
          "Minor inconsistency in negation cases"
        ],
        benchmarks: {
          AIME: 90,
          MMLU: 78,
          MSUR: 70
        },
        variants: {
          original: { score: 8.5, passed: true },
          ambiguity: { score: 7.8, passed: true },
          contradiction: { score: 6.2, passed: false },
          negation: { score: 8.0, passed: true }
        }
      });

      setLoading(false);
    }, 2000);
  };

  return (
    <div>
      <h1 style={{ marginBottom: "30px", fontSize: "28px" }}>
        Comprehensive Test
      </h1>

      {/* INPUT SECTION */}
      <Card title="Run Comprehensive Evaluation">
        <div style={{ marginBottom: "20px" }}>
          <label>Model Name</label>
          <input
            type="text"
            value={modelName}
            onChange={(e) => setModelName(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            placeholder="e.g. gpt-4"
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label>User Prompt</label>
          <textarea
            value={userPrompt}
            onChange={(e) => setUserPrompt(e.target.value)}
            rows="4"
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            placeholder="Explain quantum entanglement..."
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label>Samples Per Benchmark</label>
          <input
            type="number"
            value={samples}
            onChange={(e) => setSamples(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <button
          onClick={handleRunTest}
          style={{
            background: "#3B82F6",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          {loading ? "Running..." : "Run Comprehensive Test"}
        </button>
      </Card>

      {/* RESULTS SECTION */}
      {result && (
        <>
          {/* Overall Verdict */}
          <Card title="Overall Verdict">
            <div style={{ marginBottom: "10px" }}>
              <strong>Verdict:</strong> {result.overallVerdict}
            </div>

            <div style={{ marginBottom: "10px" }}>
              <strong>Accuracy:</strong> {result.overallAccuracy}%
            </div>

            <div style={{ marginBottom: "10px" }}>
              <strong>Strengths:</strong>
              <ul>
                {result.strengths.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <strong>Weaknesses:</strong>
              <ul>
                {result.weaknesses.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </Card>

          {/* Benchmark Chart */}
          <Card title="Benchmark Performance">
            <BenchmarkResultChart benchmarks={result.benchmarks} />
          </Card>

          {/* Variant Chart */}
          <Card title="Variant Performance">
            <VariantChart variants={result.variants} />
          </Card>

          {/* Variant Breakdown List */}
          <Card title="Variant Breakdown">
            {Object.entries(result.variants).map(
              ([name, variant]) => (
                <div
                  key={name}
                  style={{
                    marginBottom: "15px",
                    padding: "12px",
                    background: "#111827",
                    borderRadius: "10px"
                  }}
                >
                  <h4 style={{ marginBottom: "5px" }}>
                    {name.toUpperCase()}
                  </h4>
                  <p>Score: {variant.score}</p>
                  <StatusBadge passed={variant.passed} />
                </div>
              )
            )}
          </Card>
        </>
      )}
    </div>
  );
}