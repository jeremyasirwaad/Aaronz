import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/LoginPage/Login";

function App() {
  return (
    <Router>
      <div className="App">
          <Navbar />
          <Login />
      </div>
    </Router>
  );
}

export default App;
