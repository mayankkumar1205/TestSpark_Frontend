import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import StatusBadge from "../components/StatusBadge";
import { mockEvalRuns } from "../mockData";

export default function EvaluationRuns() {
  const navigate = useNavigate();

  const [runs, setRuns] = useState(mockEvalRuns);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [currentPage, setCurrentPage] = useState(1);

  const runsPerPage = 5;

  // -----------------------
  // Simulate auto-complete running jobs
  // -----------------------
  useEffect(() => {
    const timer = setInterval(() => {
      setRuns((prevRuns) =>
        prevRuns.map((run) =>
          run.status === "running"
            ? {
                ...run,
                status: "completed",
                passed: Math.random() > 0.3,
                averageScore: (Math.random() * 4 + 6).toFixed(1)
              }
            : run
        )
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // -----------------------
  // Filtering
  // -----------------------
  const filteredRuns = runs.filter((run) => {
    const matchesSearch =
      run.model.toLowerCase().includes(search.toLowerCase()) ||
      run.id.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || run.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // -----------------------
  // Sorting
  // -----------------------
  const sortedRuns = [...filteredRuns].sort((a, b) => {
    if (sortBy === "score") {
      return b.averageScore - a.averageScore;
    } else {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }
  });

  // -----------------------
  // Pagination
  // -----------------------
  const indexOfLast = currentPage * runsPerPage;
  const indexOfFirst = indexOfLast - runsPerPage;
  const currentRuns = sortedRuns.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(sortedRuns.length / runsPerPage);

  // -----------------------
  // Create New Run (Mock)
  // -----------------------
  const createRun = () => {
    const newRun = {
      id: `run_${Math.floor(Math.random() * 10000)}`,
      model: "new-model",
      averageScore: 0,
      passed: false,
      status: "running",
      createdAt: new Date().toISOString().split("T")[0]
    };

    setRuns([newRun, ...runs]);
  };

  return (
    <div>
      <h1 style={{ marginBottom: "30px", fontSize: "28px" }}>
        Evaluation Runs
      </h1>

      {/* Controls */}
      <div style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "8px", borderRadius: "6px" }}
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          style={{ padding: "8px", borderRadius: "6px" }}
        >
          <option value="all">All Status</option>
          <option value="completed">Completed</option>
          <option value="running">Running</option>
          <option value="failed">Failed</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          style={{ padding: "8px", borderRadius: "6px" }}
        >
          <option value="date">Sort by Date</option>
          <option value="score">Sort by Score</option>
        </select>

        <button
          onClick={createRun}
          style={{
            background: "#22C55E",
            border: "none",
            padding: "8px 14px",
            color: "white",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          + New Run
        </button>
      </div>

      {/* Table */}
      <Card title="All Evaluation Runs">
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid #374151" }}>
              <th style={{ padding: "10px" }}>Run ID</th>
              <th style={{ padding: "10px" }}>Model</th>
              <th style={{ padding: "10px" }}>Score</th>
              <th style={{ padding: "10px" }}>Status</th>
              <th style={{ padding: "10px" }}>Created</th>
              <th style={{ padding: "10px" }}>Result</th>
              <th style={{ padding: "10px" }}>Action</th>
            </tr>
          </thead>

          <tbody>
            {currentRuns.map((run) => (
              <tr key={run.id} style={{ borderBottom: "1px solid #1F2937" }}>
                <td style={{ padding: "10px" }}>{run.id}</td>
                <td style={{ padding: "10px" }}>{run.model}</td>
                <td style={{ padding: "10px" }}>
                  {run.status === "running"
                    ? "..."
                    : `${run.averageScore} / 10`}
                </td>
                <td style={{ padding: "10px" }}>{run.status}</td>
                <td style={{ padding: "10px" }}>{run.createdAt}</td>
                <td style={{ padding: "10px" }}>
                  {run.status === "completed" ? (
                    <StatusBadge passed={run.passed} />
                  ) : (
                    "-"
                  )}
                </td>
                <td style={{ padding: "10px" }}>
                  <button
                    onClick={() => navigate(`/runs/${run.id}`)}
                    style={{
                      background: "#3B82F6",
                      border: "none",
                      padding: "6px 12px",
                      color: "white",
                      borderRadius: "6px",
                      cursor: "pointer"
                    }}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              style={{
                margin: "0 5px",
                padding: "5px 10px",
                background:
                  currentPage === i + 1 ? "#3B82F6" : "#1F2937",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </Card>
    </div>
  );
}