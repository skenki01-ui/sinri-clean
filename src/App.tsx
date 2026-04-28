export default function App() {
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

      <button style={{ marginTop: 20, padding: "10px 20px" }}>
        相談を開始する
      </button>

      <hr style={{ margin: "40px 0" }} />

      <p style={{ fontSize: 12 }}>
        ※本サービスは医療行為ではありません
      </p>

      <div style={{ fontSize: 12 }}>
        <p>運営者：個人開発</p>
        <p>メール：example@gmail.com</p>
      </div>

      <div style={{ marginTop: 20 }}>
        <a href="/terms">利用規約</a> /{" "}
        <a href="/privacy">プライバシーポリシー</a> /{" "}
     
      </div>
    </div>
  );
}