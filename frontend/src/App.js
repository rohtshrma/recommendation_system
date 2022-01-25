import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Question from "./components/Questions/Question";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/question" element={<Question />} />
      </Routes>
    </>
  );
}

export default App;
