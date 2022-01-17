import './landing.css'
import { ReactComponent as Svg2 } from "./assets/undraw_online_connection_6778.svg";
import { ReactComponent as Svg3 } from "./assets/undraw_mind_map_re_nlb6.svg";
import { Button, Container, Navbar, Figure } from "react-bootstrap";
import "animate.css";
// import './bootstrap.min.css';    
import AOS from "aos";
import "aos/dist/aos.css";
import  image4  from './assets/think.png'

AOS.init({
    once: true
});

function Landing() {
   return (
      <div class="app">
         <Navbar bg="dark" variant="dark">
            <Container>
               <Navbar.Brand>
                  <img
                     src="https://aaronz.co/static/media/logoWhite.3e2b20a0acc86074901868a49b85ca61.svg"
                     height="40"
                  />
               </Navbar.Brand>
               <Navbar.Toggle />
               <Navbar.Collapse className="justify-content-end">
                  <Navbar.Text>
                     <Button variant="outline-light">Login</Button>
                  </Navbar.Text>
               </Navbar.Collapse>
            </Container>
         </Navbar>
         <div class="header ">
            <div
               className="words"
               data-aos="fade-left"
               data-aos-offset="300"
               data-aos-easing="ease-in-sine"
            >
               <h1>
                  Welcome to <span className='span1'>Aaronz connect!</span>
               </h1>
               <p>The ultimate solution to finding properties.</p>
            </div>
            <img src="https://cdn.pixabay.com/photo/2014/09/18/11/56/skyscrapers-450793__340.jpg" />
         </div>

         <div class="two">
            <img src="https://miro.medium.com/max/1400/1*Y-kuGcr7puccV5Fz553hVw.png" />

            <div
               className="div"
               data-aos="fade-right"
               data-aos-offset="300"
               data-aos-easing="ease-in-sine"
            >
               <h2>So, how does this work?</h2>

               <p>
                  Just login in to <span>aaronz connect</span> and submit your request to either buy
                  or sell a property effortlessly.
               </p>

               <ul>
                  <li>Start private conversation with buyer/seller</li>
                  <li>Shedule viewings and track the deal progress</li>
                  <li>Close deals and calculate commission share for easy tracking in future</li>
               </ul>
            </div>
         </div>

         <div className="three">
            <Svg2 data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" />
            <p data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
               Click on the property you want to show your buyer. Connect with the agent who has the
               property on the go and track the conversation.
            </p>
         </div>

         <div
            className="four"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
         >
            <Svg3 />
            <div>
               <h2>Got a buyer but no property?</h2>
               <p>Just put in request for the property and thats it.</p>

               <p>
                  This request is shared with wide network of Aaronz agents and expect responses
                  within minutes.
               </p>

               <p>
                  The system is designed to scan through the massive inventory and provide you with
                  exact match or similar to your request.
               </p>
            </div>
         </div>

         <div className="five" data-aos="fade-up" >
            <div>
               <h2>Have a hot property but no Buyer?</h2>
               <p>Relax, we got it covered</p>

               <p>
                  Just put in details of your property and our agents will get back to you with
                  buyers.
               </p>
            </div>

            <img src= { image4 } alt="image" />
         </div>
      </div>
   );
}

export default Landing;

// <Svg2 data-aos="fade-up" />