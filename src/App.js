import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <div id="content">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </div>
    </div>
  </Router>
  );
}

function Home(){
  return <h2>Home</h2>
}
export default App;
