import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import HomePage from "./pages/";
import DetailsPage from "./pages/details";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/posts/:id" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
