export const mockRuns = [
  {
    id: 1,
    averageScore: 8.4,
    passed: true,
    status: "completed",
    benchmarkScores: {
      AIME: 90,
      MMLU: 85,
      MSUR: 75
    }
  },
  {
    id: 2,
    averageScore: 7.1,
    passed: true,
    status: "completed",
    benchmarkScores: {
      AIME: 80,
      MMLU: 70,
      MSUR: 65
    }
  },
  {
    id: 3,
    averageScore: 5.8,
    passed: false,
    status: "completed",
    benchmarkScores: {
      AIME: 60,
      MMLU: 55,
      MSUR: 50
    }
  }
];

export const mockEvalRuns = [
  {
    id: "run_001",
    model: "gpt-4",
    averageScore: 8.4,
    passed: true,
    status: "completed",
    createdAt: "2026-01-12"
  },
  {
    id: "run_002",
    model: "llama3.2",
    averageScore: 6.9,
    passed: true,
    status: "completed",
    createdAt: "2026-01-18"
  },
  {
    id: "run_003",
    model: "mixtral",
    averageScore: 5.4,
    passed: false,
    status: "failed",
    createdAt: "2026-01-25"
  },
  {
    id: "run_004",
    model: "phi3",
    averageScore: 7.8,
    passed: true,
    status: "running",
    createdAt: "2026-02-01"
  }
];