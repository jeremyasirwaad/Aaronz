import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/LoginPage/Login";
import Register from "./components/Register/Register"

function App() {
  return (
      <div className="App">
        <Router>
          <Navbar />
           <Switch>
             <Route exact path="/"> 
                <Login /> 
             </Route>
             <Route exact path="/register"> 
                <Register /> 
             </Route>
            </Switch>
        </Router>
      </div>
  );
}

export default App;
