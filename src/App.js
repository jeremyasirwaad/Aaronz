import {
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/LoginPage/Login";
import Register from "./components/Register/Register"
import { Landing } from "./components/Landing/Landing";
import { LandingDash } from "./components/Dashboad/LandinginDash/LandingDash"
import { SubmitReq } from "./components/Dashboad/submitreq/SubmitReq"
import forsale from "./components/Dashboad/forsale/forsale";
import Forrent from "./components/Dashboad/forrent/Forrent";
import Viewrequest from "./components/Dashboad/Viewrequest/Viewrequest";
import { Sidenav } from './components/Dashboad/SideNav/Sidenav'
import  MyProfile  from './components/Dashboad/myProfile/MyProfile'
import AgentTools from './components/Dashboad/AgentTools/AgentTools'
import PropReqScreen from './components/Dashboad/propReqScreen/PropReqScreen'

function App() {
  return (
      <div className="App">
          <Navbar />
              <Route path="/dashboard" component={Sidenav}></Route>
             <Route exact path = "/" component={ Landing }></Route>
             <Route exact path = "/login" component={ Login }></Route>
             <Route exact path = "/dashboard" component={LandingDash}></Route>
             <Route exact path = "/dashboard/Submitreq" component={ SubmitReq }></Route>
             <Route exact path = "/register" component={ Register }></Route>
             <Route exact path = "/dashboard/forsale" component={ PropReqScreen }></Route>
             <Route exact path = "/dashboard/forrent" component={ Forrent }></Route>
             <Route exact path = "/dashboard/viewreq" component={ Viewrequest }></Route>
             <Route exact path = "/dashboard/myprofile" component={ MyProfile }></Route>
             <Route exact path = "/dashboard/commissioncal" component={ AgentTools }></Route>

      </div>
  );
}

export default App;
