export default function MetricCard({ title, value, color }) {
  return (
    <div
      style={{
        background: "#1E293B",
        padding: "20px",
        borderRadius: "12px",
        flex: 1,
        minWidth: "200px"
      }}
    >
      <h4 style={{ color: "#94A3B8", marginBottom: "10px" }}>{title}</h4>
      <h2 style={{ color: color || "white", fontSize: "28px" }}>{value}</h2>
    </div>
  );
}