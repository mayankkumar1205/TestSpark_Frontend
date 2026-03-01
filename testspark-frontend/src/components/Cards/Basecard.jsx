export default function Card({ title, children }) {
  return (
    <div
      style={{
        background: "#1E293B",
        padding: "24px",
        borderRadius: "16px",
        marginBottom: "30px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.2)"
      }}
    >
      {title && (
        <h3 style={{ marginBottom: "20px", fontSize: "18px" }}>
          {title}
        </h3>
      )}
      {children}
    </div>
  );
}