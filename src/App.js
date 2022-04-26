import logo from './logo.svg';
import './App.css';

import "./main.css";



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

            <h4>About Me</h4>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.
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
            <img src="https://picsum.photos/seed/picsum/200/300" />
            <h4>Gateway</h4>

            <button className="gitButton">
              <a href="">See Github</a>
            </button>

            <button className="siteButton">
              <a href="">See Website</a>
            </button>
          </div>

          <div className="project">
            <img src="https://picsum.photos/seed/picsum/200/300" />
            <h4>Gateway</h4>

            <button className="gitButton">
              <a href="">See Github</a>
            </button>

            <button className="siteButton">
              <a href="">See Website</a>
            </button>
          </div>

          <div className="project">
            <img src="https://picsum.photos/seed/picsum/200/300" />
            <h4>Gateway</h4>

            <button className="gitButton">
              <a href="">See Github</a>
            </button>

            <button className="siteButton">
              <a href="">See Website</a>
            </button>
          </div>

          <div className="project">
            <img src="https://picsum.photos/seed/picsum/200/300" />
            <h4>Gateway</h4>

            <button className="gitButton">
              <a href="">See Github</a>
            </button>

            <button className="siteButton">
              <a href="">See Website</a>
            </button>
          </div>

          <div className="project">
            <img src="https://picsum.photos/seed/picsum/200/300" />
            <h4>Gateway</h4>

            <button className="gitButton">
              <a href="">See Github</a>
            </button>

            <button className="siteButton">
              <a href="">See Website</a>
            </button>
          </div>
        </div>
      </a>
      <p className="copyR">Copyright &copy; 2021, Chioma O Onukogu</p>
    </>
  );
}

export default App;
