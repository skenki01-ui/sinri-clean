import { useEffect, useState } from "react";
import { getResult } from "./data/aura";

const colorNameMap = {
  red: "赤",
  blue: "青",
  yellow: "黄",
  purple: "紫",
  green: "緑",
  black: "黒",
  white: "白"
};

const colorMap = {
  red: "linear-gradient(135deg,#ff3b3b,#ff7a7a)",
  blue: "linear-gradient(135deg,#3b6cff,#6fa8ff)",
  yellow: "linear-gradient(135deg,#ffd93b,#fff07a)",
  purple: "linear-gradient(135deg,#a33bff,#d580ff)",
  green: "linear-gradient(135deg,#3bff9c,#7affc1)",
  black: "linear-gradient(135deg,#111,#333)",
  white: "linear-gradient(135deg,#eee,#fff)"
};

export default function Result() {
  const [aura, setAura] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("auraColor");

    if (!stored) return;

    const result = getResult(stored);

    setAura(stored);
    setData(result);
  }, []);

  if (!aura || !data) {
    return <div>読み込み中...</div>;
  }

  return (
    <div style={{
      height: "100vh",
      background: "#111",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{
        width: "320px",
        padding: "30px 20px",
        borderRadius: "16px",
        background: colorMap[aura],
        color: aura === "white" ? "#000" : "#fff",
        textAlign: "center"
      }}>
        <h2>あなたの現在のオーラ</h2>

        <h3 style={{ marginTop: 10 }}>
          {colorNameMap[aura]}のオーラ
        </h3>

        <p style={{ opacity: 0.7 }}>({aura})</p>

        <h3 style={{ marginTop: 15 }}>
          {data.title}
        </h3>

        {/* ここ修正ポイント */}
        {(data.lines || []).map((line, i) => (
          <p key={i}>{line}</p>
        ))}

        <button
          onClick={() => window.location.hash = "/"}
          style={{
            marginTop: 20,
            padding: "10px 20px"
          }}
        >
          もう一度
        </button>
      </div>
    </div>
  );
}