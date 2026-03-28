import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/main/Main";
import Projects from "./components/projects-page/Projects";


function App() {
  return (
    <>
      <Router> 
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects" element={<Projects />} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
