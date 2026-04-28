import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Tokushoho from "./pages/";

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1>ひきよせ</h1>
      <p>このアプリは心理的な気づきを提供するサービスです。</p>

      <button style={{ margin: "20px", padding: "10px 20px" }}>
        今日のアドバイスを見る
      </button>

      <p style={{ marginTop: "40px", fontSize: "12px" }}>
        ※このサービスは医療行為ではありません
      </p>

      <div style={{ marginTop: "20px", fontSize: "12px" }}>
        <Link to="/terms">利用規約</Link> /{" "}
        <Link to="/privacy">プライバシーポリシー</Link> /{" "}
        <Link to="/tokushoho">特商法</Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/tokushoho" element={<Tokushoho />} />
      </Routes>
    </BrowserRouter>
  );
}
