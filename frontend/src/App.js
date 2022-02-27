import { Route, Routes } from "react-router-dom";
import Admin from "./components/Admin/Admin";
import Error404 from "./components/Error404/Error404";
import Home from "./components/Home/Home";
import NewRecommendation from "./components/NewRecommendation/NewRecommendation";
import Question from "./components/Questions/Question";
import Recommendation from "./components/Recommendation/Recommendation";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/question/:product" element={<Question />} />
        <Route path="/reco" element={<Recommendation />} />
        <Route path="/newreco" element={<NewRecommendation />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />

      </Routes>
      
    </>
  );
}

export default App;
