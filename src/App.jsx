import { Routes, Route } from "react-router-dom";
import AssignSkillsPage from "./pages/AssignSkillsPage/AssignSkillsPage";
import BattleLobbyPage from "./pages/BattleLobbyPage/BattleLobbyPage";
import ComputerBattlePage from "./pages/BattlePages/ComputerBattlePage/ComputerBattlePage";
import LandingPage from "./pages/LandingPage/LandingPage";
import NotFound from "./pages/NotFoundPage/NotFound";
import RulesPage from "./pages/RulesPage/RulesPage";
import StartPage from "./pages/StartPage/StartPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/rules" element={<RulesPage />} />
      <Route path="/start" element={<StartPage />} />
      <Route path="/assign-skills" element={<AssignSkillsPage />} />
      <Route path="/battle-lobby" element={<BattleLobbyPage />} />
      <Route path="/battle/computer" element={<ComputerBattlePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
