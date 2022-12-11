import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../sass/style.scss";

import Home from "./Home";
import Layout from "./Layout";
import Projects from "./Projects";
import Error from "./Error";
import Calendar from "./Calendar";
import Settings from "./Settings";
import Entry from "./entry";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="settings" element={<Settings />} />
            <Route path="entry" element={<Entry />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
