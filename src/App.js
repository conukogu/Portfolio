import logo from './logo.svg';
import './App.css';

import "./main.css";

import cj from './PortfolioPics/cj.png'
import gw from "./PortfolioPics/gw.png";
import hh from "./PortfolioPics/hh.png";
import pj from "./PortfolioPics/pj.png";



function App() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>

      <nav className="nav-container">
        <a href="#AboutMe">About Me</a>
        <a href="#Skills">Skills</a>
        <a href="#Projects">Projects</a>
      </nav>

      <a id="AboutMe">
        <div className="about-container">
          <div className="aboutMe">
            <h1>Chioma Onukogu</h1>

            <h3>Software Engineer</h3>

            <h5>About Me</h5>
            <p>
              I am a very driven and problem-solving focused person. One of my mottos in life is that time only moves forward and, in trying to live by that statement, I like to keep my eyes ahead and figure out what's the plan for the next best thing after the next best thing. With all the tools and skills I've aquired as a coder, I am  always ready and willing to tackle the pressing needs of clients and users. When I'm not working on code, you can find usually me sketching, nerding out over some obscure superhero trivia, or burnng my latest expiremental concoction at dinner.
            </p>

            <div className="socialGroup">
              <a
                className="social"
                href="www.twitter.com"
                target="_blank"
                aria-label="Twitter"
              >
                <span className="fa-stack fa-1x sizeup">
                  <i className="fa fa-circle-thin fa-stack-2x"></i>
                  <i className="fa fa-twitter fa-stack-1x"></i>
                </span>
              </a>

              <a
                className="social"
                href="www.facebook.com"
                target="_blank"
                aria-label="Facebook"
              >
                <span className="fa-stack fa-1x sizeup">
                  <i className="fa fa-circle-thin fa-stack-2x"></i>
                  <i className="fa fa-facebook fa-stack-1x"></i>
                </span>
              </a>

              <a
                className="social"
                href="www.instagram.com"
                target="_blank"
                aria-label="Instagram"
              >
                <span className="fa-stack fa-1x sizeup">
                  <i className="fa fa-circle-thin fa-stack-2x"></i>
                  <i className="fa fa-instagram fa-stack-1x"></i>
                </span>
              </a>
            </div>
          </div>
          {/* <div className='mePic'> */}
          <img src="https://picsum.photos/seed/picsum/200/300" />
          {/* </div> */}
        </div>
      </a>

      <a id="Skills">
        <h1 className="topic">Skills</h1>
        <div className="skills-container">
          <div className="frontend">
            <h1>Frontend</h1>
            <div className="list">
              <p>CSS</p>
              <p>REACT</p>
              <p>HTML</p>
            </div>
          </div>

          <div className="tools">
            <p>GITHUB</p>
            <p>VSCODE</p>
            <p>APIs</p>
            <p>NETIFLY</p>
            <p>HEROKU</p>
          </div>

          <div className="backend">
            <h1>Backend</h1>
            <div className="list2">
              <p>MYSQL</p>
              <p>JAVASCRIPT</p>
              <p>NODEJS</p>
            </div>
          </div>
        </div>
      </a>

      <a id="Projects">
        <h1 className="topic">Projects</h1>
        <div className="projects-container">
          <div className="project">
            <img src={gw} />

            <h4>Gateway</h4>

            <button className="gitButton">
              <a href="https://HeartfeltVerticalSandbox.chiomaonukogu.repl.co">
                See Website
              </a>
            </button>

            <button className="siteButton">
              <a href="">See Github</a>
            </button>
          </div>

          <div className="project">
            <img src={hh} />

            <h4>HopeHacks</h4>

            <button className="gitButton">
              <a href="https://edwine97.github.io/hopehacks-g3/index.html">
                See Website
              </a>
            </button>

            <button className="siteButton">
              <a href="">See Github</a>
            </button>
          </div>

          <div className="project">
            <img src={cj} />
            <h4>Code For Justice</h4>

            <button className="gitButton">
              <a href="https://htmlpreview.github.io/?https://github.com/Emilyleonella/CodeJustice_/blob/Chioma/index.html">
                See Website
              </a>
            </button>

            <button className="siteButton">
              <a href="">See Github</a>
            </button>
          </div>

          <div className="project">
            <img src={hh} />
            <h4>eCommerce</h4>

            <button className="gitButton">
              <a href="https://aadabraids.herokuapp.com/">See Website</a>
            </button>

            <button className="siteButton">
              <a href="">See Github</a>
            </button>
          </div>

          <div className="project">
            <img src={pj} />
            <h4>Redesign</h4>

            <button className="gitButton">
              <a href="https://pj-project.herokuapp.com/">See Website</a>
            </button>

            <button className="siteButton">
              <a href="">See Github</a>
            </button>
          </div>
        </div>
         <p className="copyR">Copyright &copy; 2021, Chioma O Onukogu</p>
      </a>
     
    </>
  );
}

export default App;
