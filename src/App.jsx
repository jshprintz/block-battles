import LandingPage from "./pages/landing/LandingPage";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/not_found/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {/* <Route path="/rules" element={<RulesPage />} />
      <Route path="/start" element={<StartPage />} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
