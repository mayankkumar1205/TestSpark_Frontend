import { useState } from "react";
import axios from "axios";
import StatusBadge from "../components/StatusBadge";
import Spinner from "../components/Spinner";

export default function QuickTest() {
  const [modelName, setModelName] = useState("");
  const [testCaseId, setTestCaseId] = useState("");
  const [temperature, setTemperature] = useState(0.7);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRunTest = async () => {
    if (!modelName || !testCaseId) {
      alert("Please enter Model Name and Test Case ID");
      return;
    }

    try {
      setLoading(true);
      setResponse(null);

      const res = await axios.post(
        "http://localhost:3000/api/eval/test-custom-model",
        {
          modelName,
          testCaseId,
          parameters: {
            temperature: parseFloat(temperature),
          },
        }
      );

      setResponse(res.data);
    } catch (error) {
      console.error("API Error:", error);
      alert("Error running test. Check backend server.");
    } finally {
      setLoading(false);
    }
  };

  const judgement = response?.data?.judgement;
  const modelOutput = response?.data?.modelResponse?.text;

  return (
    <div>
      <h1 style={{ marginBottom: "20px" }}>Quick Test</h1>

      <div style={{ display: "flex", gap: "40px" }}>
        {/* LEFT SIDE FORM */}
        <div style={{ flex: 1 }}>
          <div style={{ marginBottom: "15px" }}>
            <label>Model Name</label>
            <input
              type="text"
              value={modelName}
              onChange={(e) => setModelName(e.target.value)}
              style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              placeholder="e.g. gpt-4"
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label>Test Case ID</label>
            <input
              type="text"
              value={testCaseId}
              onChange={(e) => setTestCaseId(e.target.value)}
              style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              placeholder="e.g. AIME-01"
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label>Temperature: {temperature}</label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
              style={{ width: "100%" }}
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
              cursor: "pointer",
            }}
          >
            {loading ? "Running..." : "Run Test"}
          </button>
        </div>

        {/* RIGHT SIDE RESULTS */}
        <div style={{ flex: 1 }}>
          <div
            style={{
              background: "#1E293B",
              padding: "20px",
              borderRadius: "12px",
              minHeight: "300px",
            }}
          >
            <h3 style={{ marginBottom: "15px" }}>Test Result</h3>

            {!response && !loading && <p>No response yet</p>}

            {loading && <Spinner />}

            {judgement && (
              <>
                <div style={{ marginBottom: "10px" }}>
                  <strong>Score:</strong> {judgement.score} / 10
                </div>

                <div style={{ marginBottom: "10px" }}>
                 <strong>Status:</strong>{" "}
<StatusBadge passed={judgement.passed} />
                </div>

                <div style={{ marginBottom: "5px" }}>
                  Accuracy: {judgement.accuracy}
                </div>
                <div style={{ marginBottom: "5px" }}>
                  Relevance: {judgement.relevance}
                </div>
                <div style={{ marginBottom: "5px" }}>
                  Coherence: {judgement.coherence}
                </div>
                <div style={{ marginBottom: "15px" }}>
                  Completeness: {judgement.completeness}
                </div>
              </>
            )}

            {modelOutput && (
              <div style={{ marginTop: "20px" }}>
                <h4>Model Response:</h4>
                <div
                  style={{
                    background: "#0F172A",
                    padding: "15px",
                    borderRadius: "8px",
                    whiteSpace: "pre-wrap",
                    marginTop: "10px",
                  }}
                >
                  {modelOutput}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}