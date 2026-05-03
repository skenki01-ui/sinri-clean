import { useEffect, useState } from "react";
import { emotionQuestion, getRandomQuestions } from "./data/questions";

export default function Question() {
  const [step, setStep] = useState(0);
  const [emotion, setEmotion] = useState(null);
  const [list, setList] = useState([]);
  const [score, setScore] = useState({});
  const [fade, setFade] = useState(true);

  useEffect(() => {
    setList(getRandomQuestions());
  }, []);

  function nextStep() {
    setFade(false);
    setTimeout(() => {
      setStep(prev => prev + 1);
      setFade(true);
    }, 300);
  }

  function handleEmotion(val) {
    setEmotion(val);
    nextStep();
  }

  function handleAnswer(type) {
    setScore(prev => ({
      ...prev,
      [type]: (prev[type] || 0) + 1
    }));

    if (step >= list.length) {
      const result = Object.entries(score)
        .sort((a, b) => b[1] - a[1])[0]?.[0];

      localStorage.setItem("auraColor", result);
      localStorage.setItem("emotion", emotion);

      window.location.hash = "/result";
      return;
    }

    nextStep();
  }

  const q = step === 0 ? emotionQuestion : list[step - 1];

  return (
    <div style={{
      height: "100vh",
      background: "#000",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{
        width: 280,
        padding: 24,
        borderRadius: 20,
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(10px)",
        color: "#fff",
        textAlign: "center",
        opacity: fade ? 1 : 0,
        transition: "0.3s"
      }}>
        <h3 style={{ marginBottom: 20 }}>{q.text}</h3>

        {q.options.map(o => (
          <button
            key={o.text}
            onClick={() =>
              step === 0 ? handleEmotion(o.value) : handleAnswer(o.type)
            }
            style={{
              display: "block",
              width: "100%",
              marginBottom: 10,
              padding: "10px",
              borderRadius: 10,
              border: "none",
              background: "rgba(255,255,255,0.1)",
              color: "#fff",
              cursor: "pointer"
            }}
          >
            {o.text}
          </button>
        ))}

        <div style={{
          marginTop: 20,
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: "#fff",
          marginInline: "auto",
          opacity: 0.5
        }} />
      </div>
    </div>
  );
}