import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div style={{ display: "flex", height: "100vh", background: "#0F172A", color: "white" }}>
      
      {/* Sidebar */}
      
      
      <div
        style={{
          width: "240px",
          background: "#111827",
          padding: "30px",
          borderRight: "1px solid #1F2937"
        }}
      >
        <h2 style={{ marginBottom: "40px" }}>TESTSPARK</h2>

        <nav style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Link to="/" style={{ color: "#9CA3AF", textDecoration: "none" }}>
            Dashboard
          </Link>
          <Link to="/quick-test" style={{ color: "#9CA3AF", textDecoration: "none" }}>
            Quick Test
          </Link>
          <Link to="/comprehensive-test" style={{ color: "#9CA3AF", textDecoration: "none" }}>
  Comprehensive Test
</Link>
<Link to="/runs" style={{ color: "#9CA3AF", textDecoration: "none" }}>
  Evaluation Runs
</Link>
        </nav>
<button
  onClick={() => alert("Demo Mode Activated!")}
  style={{
    background: "#F59E0B",
    border: "none",
    padding: "8px",
    color: "white",
    borderRadius: "6px",
    marginTop: "20px",
    cursor: "pointer"
  }}
>
  🚀 Demo Mode
</button>

        <button
  onClick={() => {
    localStorage.removeItem("isAuthenticated");
    window.location.reload();
  }}
  style={{
    marginBottom: "30px",
    background: "#EF4444",
    border: "none",
    padding: "6px 12px",
    color: "white",
    borderRadius: "6px",
    cursor: "pointer"
  }}
>
  Logout
</button>
        
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "40px", overflowY: "auto" }}>
        {children}
      </div>
    </div>
  );
}