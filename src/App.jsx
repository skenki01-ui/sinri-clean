import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Question from "./pages/Question";
import Result from "./pages/Result";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/q" element={<Question />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </HashRouter>
  );
}