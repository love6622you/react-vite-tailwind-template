import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./routes";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
