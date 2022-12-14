import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./sass/style.scss";

import Home from "./views/Home";
import Layout from "./views/Layout";
import Projects from "./views/Projects";
import Error from "./views/Error";
import Calendar from "./views/Calendar";
import Settings from "./views/Settings";
import Landing from "./views/Landing";
import { AppProvider} from "./hooks/context";

const App: React.FC = () => {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/project/:id" element={<Projects />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
