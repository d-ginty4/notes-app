import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./sass/style.scss";

import Home from "./views/Home";
import Layout from "./views/Layout";
import Projects from "./views/Projects";
import Error from "./views/Error";
import Calendar from "./views/Calendar";
import Settings from "./views/Settings";
import Landing from "./views/Landing";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="settings" element={<Settings />} />
            <Route path="landing" element={<Landing />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
