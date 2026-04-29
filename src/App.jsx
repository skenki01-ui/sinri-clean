import { HashRouter, Routes, Route, Link, useNavigate } from "react-router-dom";

import Terms from "./pages/Terms.jsx";
import Privacy from "./pages/Privacy.jsx";
import Tokushoho from "./pages/Tokushoho.jsx";
import Contact from "./pages/Contact.jsx";
import Start from "./pages/Start.jsx";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>オンライン相談サービス</h1>

      <p>
        当サービスは、日常の悩みや疑問について
        テキストベースで相談できるサービスです。
      </p>

      <h3>料金</h3>
      <p>・1回相談：500円</p>
      <p>・月額プラン：1500円</p>

      <button
        style={{ marginTop: 20, padding: "10px 20px" }}
        onClick={() => navigate("/start")}
      >
        相談を開始する
      </button>

      <hr style={{ margin: "40px 0" }} />

      <p style={{ fontSize: 12 }}>
        ※本サービスは医療行為ではありません
      </p>

      <div style={{ fontSize: 12 }}>
        <p>運営者：角谷 陽哉</p>
        <p>メール：kuranahachi@gmail.com</p>
        <p>電話番号：080-5127-7084</p>
        <p>所在地：大阪府住之江区御崎8丁目2-28</p>
      </div>

      <div style={{ marginTop: 20 }}>
        <Link to="/terms">利用規約</Link> /{" "}
        <Link to="/privacy">プライバシーポリシー</Link> /{" "}
        <Link to="/tokushoho">特定商取引法</Link> /{" "}
        <Link to="/contact">お問い合わせ</Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/tokushoho" element={<Tokushoho />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/start" element={<Start />} />
      </Routes>
    </HashRouter>
  );
}