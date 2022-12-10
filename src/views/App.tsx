import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../sass/style.scss";

import Home from "./Home";
import Navbar from "./Nav";
import Projects from "./Projects";
import Error from "./Error";
import Calendar from "./Calendar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
