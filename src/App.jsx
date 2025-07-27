import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import StartPage from "./pages/StartPage/StartPage";
import RulesPage from "./pages/RulesPage/RulesPage";
import NotFound from "./pages/NotFoundPage/NotFound";
import BattleLobbyPage from "./pages/BattleLobbyPage/BattleLobbyPage";
import AssignSkillsPage from "./pages/AssignSkillsPage/AssignSkillsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/rules" element={<RulesPage />} />
      <Route path="/start" element={<StartPage />} />
      <Route path="/assign-skills" element={<AssignSkillsPage />} />
      <Route path="/battle-lobby" element={<BattleLobbyPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
