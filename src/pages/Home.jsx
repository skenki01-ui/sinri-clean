export default function Home() {
  return (
    <div style={{
      height: "100vh",
      background: "#000",
      color: "#fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    }}>
      <h1>あなたの深層を暴く</h1>

      <button
        onClick={() => window.location.hash = "/q"}
        style={{
          marginTop: 20,
          padding: "10px 20px"
        }}
      >
        診断を始める
      </button>
    </div>
  );
}