import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Question from "./components/Questions/Question";
import Recommendation from "./components/Recommendation/Recommendation";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/question" element={<Question />} />
        <Route path="/reco" element={<Recommendation/>} />
      </Routes>
    </>
  );
}

export default App;
