import LandingPage from "./pages/LandingPage/LandingPage";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFoundPage/NotFound";

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
