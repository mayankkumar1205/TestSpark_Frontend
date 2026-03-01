export default function Spinner() {
  return (
    <div
      style={{
        border: "4px solid #334155",
        borderTop: "4px solid #3B82F6",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        animation: "spin 1s linear infinite",
        margin: "20px auto"
      }}
    />
  );
}