import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import StartPage from "./pages/StartPage/StartPage";
import RulesPage from "./pages/RulesPage/RulesPage";
import NotFound from "./pages/NotFoundPage/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/rules" element={<RulesPage />} />
      <Route path="/start" element={<StartPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
