import react from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { RiGithubLine } from "react-icons/ri";
import "./projects.scss";

function Projects() {
  return (
    <>
      <div className="proj-page-container">
        <a
          href="jackt.xyz"
          target="_blank"
          rel="noreferrer"
          className="proj box port"
        >
          <article>
            {/* <img src={SWQ} alt="captionMe" className="proj-logo" /> */}
            {/* <iframe className="proj-bg" src="https://kay0ss.github.io/csb-0g3fh/" /> */}

            <a
              className="arrow-btn-long-proj"
              href="https:www.jackt.xyz"
              target="_blank"
              rel="noreferrer"
            >
              <BsArrowUpRight />
              <p className="btn-text">React Portfolio</p>
            </a>
            <p style={{ opacity: "0" }} className="description">
              My first portfolio website. Built with React, Sass, and Styled Components.
            </p>
            <a
              className="arrow-btn-git"
              href="https://github.com/Kay0ss/react-portfolio"
              target="_blank"
              rel="noreferrer"
              style={{ left: "69.4%" }}
            >
              <RiGithubLine />
            </a>
          </article>
        </a>
        <a
          href="https://true-crime-quiz.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
          className="proj box tc"
        >
          <article>
            {/* <img src={TC} alt="captionMe" className="proj-logo" /> */}
            {/* <iframe className="proj-bg" src="https://kay0ss.github.io/csb-0g3fh/" /> */}

            <a
              className="arrow-btn-long-proj"
              href="https://true-crime-quiz.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <BsArrowUpRight />
              <p className="btn-text">True Crime Quiz</p>
            </a>
            <p style={{ opacity: "0" }} className="description">
              A quiz game that tests your knowledge of true crime. The game uses
              a login system to keep track of the users score, and
                create questions. The game is built with HTML, CSS,
              JavaScript, and Auth0.
              <br /> &nbsp;
              <span style={{ color: "gray", fontSize: "10px" }}>
                App may take a little while on initial load
              </span>
            </p>
            <a
              style={{ left: "73%" }}
              className="arrow-btn-git"
              href="https://github.com/bretpeters3n/true-crime-quiz"
              target="_blank"
              rel="noreferrer"
            >
              <RiGithubLine />
            </a>
          </article>
        </a>
        <a
          href="https://captionmeme.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
          rel="noopener noreferrer"
          className="proj box cm"
        >
          <article>
            {/* <img src={CM} alt="captionMe" className="proj-logo" /> */}
            {/* <iframe className="proj-bg" src="https://kay0ss.github.io/csb-0g3fh/" /> */}
            <a
              className="arrow-btn-long-proj"
              href="https://captionmeme.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <BsArrowUpRight />
              <p className="btn-text">CaptionMe(me)</p>
            </a>
            <p style={{ opacity: "0" }} className="description">
              This website allows users to upload photos and caption them, and
              then share them with their friends. The website is built with
              Html, CSS, Node, Express, and MongoDB.
              <br /> &nbsp;
              <span style={{ color: "gray", fontSize: "10px" }}>
                App may take a little while on initial load
              </span>
            </p>
            <a
              className="arrow-btn-git"
              href="https://github.com/jordanlindgren/GroupProject2"
              target="_blank"
              rel="noreferrer"
              style={{ left: "71.5%" }}
            >
              <RiGithubLine />
            </a>
          </article>
        </a>
        <a
          href="https://coleenyart.github.io/which-star-wars-character-are-you/"
          target="_blank"
          rel="noreferrer"
          className="proj box swq"
        >
          <article>
            {/* <img src={SWQ} alt="captionMe" className="proj-logo" /> */}
            {/* <iframe className="proj-bg" src="https://kay0ss.github.io/csb-0g3fh/" /> */}

            <a
              className="arrow-btn-long-proj"
              href="https://coleenyart.github.io/which-star-wars-character-are-you/"
              target="_blank"
              rel="noreferrer"
            >
              <BsArrowUpRight />
              <p className="btn-text">Star Quiz</p>
            </a>
            <p style={{ opacity: "0" }} className="description">
              A simple web app that allows users to play a game of Star Wars
              trivia to see what character you would be. It was built using
              Simple Html, CSS, Javascript and a Third party API.
            </p>
            <a
              className="arrow-btn-git"
              href="https://github.com/Kay0ss/which-star-wars-character-are-you"
              target="_blank"
              rel="noreferrer"
              style={{ left: "53.2%" }}
            >
              <RiGithubLine />
            </a>
          </article>
        </a>
        <a
          href="https://kay0ss.github.io/nft-preview-card/"
          target="_blank"
          rel="noreferrer"
          className="proj box nft"
        >
          <article>
            {/* <img src={CM} alt="captionMe" className="proj-logo" /> */}
            {/* <iframe className="proj-bg" src="https://kay0ss.github.io/csb-0g3fh/" /> */}

            <a
              className="arrow-btn-long-proj"
              href="https://kay0ss.github.io/nft-preview-card/"
              target="_blank"
              rel="noreferrer"
            >
              <BsArrowUpRight />
              <p className="btn-text">Nft Card</p>
            </a>
            <p style={{ opacity: "0" }} className="description">
              A Front End Mentor Challenge. This is meant to demonstrate my
              skills of bringing mockups to life in the browser. I used HTML,
              and CSS to build this app.
            </p>

            <a
              style={{ left: "51%" }}
              className="arrow-btn-git"
              href="https://github.com/Kay0ss/nft-preview-card"
              target="_blank"
              rel="noreferrer"
            >
              <RiGithubLine />
            </a>
          </article>
        </a>

        <a
          href="https://note-taker-jrt.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
          className="proj box not"
        >
          <article>
            {/* <img src={SWQ} alt="captionMe" className="proj-logo" /> */}
            {/* <iframe className="proj-bg" src="https://kay0ss.github.io/csb-0g3fh/" /> */}

            <a
              className="arrow-btn-long-proj"
              href="https://note-taker-jrt.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <BsArrowUpRight />
              <p className="btn-text">Note Taker</p>
            </a>
            <p style={{ opacity: "0" }} className="description">
              A very simple no taking app that uses local storage to save notes.
              It was built using HTML, CSS, and Javascript.
              <br /> &nbsp;
              <span style={{ color: "gray", fontSize: "10px" }}>
                App may take a little while on initial load
              </span>
            </p>
            <a
              className="arrow-btn-git"
              href="https://github.com/Kay0ss/nft-preview-card"
              target="_blank"
              rel="noreferrer"
              style={{ left: "58.1%" }}
            >
              <RiGithubLine />
            </a>
          </article>
        </a>
        <a
          href="https://kay0ss.github.io/Code-Quiz/"
          target="_blank"
          rel="noreferrer"
          className="proj box cq"
        >
          <article>
            {/* <img src={SWQ} alt="captionMe" className="proj-logo" /> */}
            {/* <iframe className="proj-bg" src="https://kay0ss.github.io/csb-0g3fh/" /> */}

            <a
              className="arrow-btn-long-proj"
              href="https://kay0ss.github.io/Code-Quiz/"
              target="_blank"
              rel="noreferrer"
            >
              <BsArrowUpRight />
              <p className="btn-text">Code Quiz</p>
            </a>
            <p style={{ opacity: "0" }} className="description">
              This is a quiz game that tests your knowledge of code. The game
              uses JavaScript and local storage to keep track of the users
              score. The game is built with HTML, CSS, JavaScript.
            </p>
            <a
              className="arrow-btn-git"
              href="https://github.com/Kay0ss/Code-Quiz"
              target="_blank"
              rel="noreferrer"
              style={{ left: "56.6%" }}
            >
              <RiGithubLine />
            </a>
          </article>
        </a>
      </div>
    </>
  );
}

export default Projects;
