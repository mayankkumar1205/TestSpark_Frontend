export default function StatusBadge({ passed }) {
  const baseStyle = {
    padding: "6px 12px",
    borderRadius: "20px",
    fontWeight: "bold",
    fontSize: "12px",
    display: "inline-block"
  };

  const passStyle = {
    ...baseStyle,
    backgroundColor: "#14532D",
    color: "#22C55E"
  };

  const failStyle = {
    ...baseStyle,
    backgroundColor: "#7F1D1D",
    color: "#EF4444"
  };

  return (
    <span style={passed ? passStyle : failStyle}>
      {passed ? "PASS" : "FAIL"}
    </span>
  );
}