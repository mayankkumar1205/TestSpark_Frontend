import { NavLink } from "react-router-dom";

export default function Layout({ children }) {
  const navigation = [
    {
      section: "CORE",
      items: [
        { name: "Dashboard", path: "/" },
        { name: "Quick Test", path: "/quick-test" },
        { name: "Comprehensive Test", path: "/comprehensive-test" },
      ],
    },
    {
      section: "MONITORING",
      items: [
        { name: "Evaluation Runs", path: "/runs" },
        { name: "Benchmarks", path: "/benchmarks" },
      ],
    },
    {
      section: "TOOLS",
      items: [
        { name: "Generator", path: "/generator" },
      ],
    },
    {
      section: "SYSTEM",
      items: [
        { name: "Settings", path: "/settings" },
      ],
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        background: "#0F172A",
        color: "white",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: "260px",
          background: "#111827",
          padding: "30px 24px",
          borderRight: "1px solid #1F2937",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h2 style={{ marginBottom: "40px", fontWeight: "600" }}>
            TESTSPARK
          </h2>

          {navigation.map((group) => (
            <div key={group.section} style={{ marginBottom: "30px" }}>
              <p
                style={{
                  fontSize: "12px",
                  color: "#6B7280",
                  marginBottom: "10px",
                  letterSpacing: "1px",
                }}
              >
                {group.section}
              </p>

              <nav style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {group.items.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === "/"}
                    style={({ isActive }) => ({
                      color: isActive ? "#FFFFFF" : "#9CA3AF",
                      textDecoration: "none",
                      padding: "8px 12px",
                      borderRadius: "8px",
                      background: isActive ? "#1F2937" : "transparent",
                      fontWeight: isActive ? "500" : "400",
                      transition: "all 0.2s ease",
                    })}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Bottom Buttons */}
        <div>
          <button
            onClick={() => alert("Demo Mode Activated!")}
            style={{
              width: "100%",
              background: "#F59E0B",
              border: "none",
              padding: "10px",
              color: "white",
              borderRadius: "8px",
              cursor: "pointer",
              marginBottom: "12px",
              fontWeight: "500",
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
              width: "100%",
              background: "#EF4444",
              border: "none",
              padding: "8px",
              color: "white",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          padding: "40px",
          overflowY: "auto",
        }}
      >
        {children}
      </div>
    </div>
  );
}