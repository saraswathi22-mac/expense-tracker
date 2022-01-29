import { Route, Routes, useLocation } from "react-router-dom";
import WorldHeritageSite from "./components/WorldHeritageSite/WorldHeritageSite";
import WorldHeritageSites from "./components/WorldHeritageSites/WorldHeritageSites";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation()
  return (
    <div>
      <Navigation />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<WorldHeritageSites />} />
          <Route path="/site/:id" element={<WorldHeritageSite />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
