import { Routes, Route } from "react-router-dom";
import {
  AssignSkillsPage,
  BattleLobbyPage,
  ComputerBattlePage,
  LandingPage,
  NotFound,
  RulesPage,
  StartPage,
} from "./pages";

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
