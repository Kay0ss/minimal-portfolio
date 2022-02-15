import react from "react";
// import captionMe from "../../images/photoshop.png";
import SWQ from "../../images/star-wars-quiz.png";
import TC from "../../images/True-Crime.png";
import CM from "../../images/caption-me.png";
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
          rel="noopener noreferrer"
          className="proj box cm"
        >
          <article>
            {/* <img src={CM} alt="captionMe" className="proj-logo" /> */}
            {/* <iframe className="proj-bg" src="https://kay0ss.github.io/csb-0g3fh/" /> */}
            <a
              className="arrow-btn-long-proj"
              href="https:www.jackt.xyz"
              target="_blank"
            >
              <BsArrowUpRight />
              <p className="btn-text">CaptionMe(me)</p>
            </a>
            <p style={{ opacity: "0" }} className="description">
              this is just a test, test, test, test, test, test, test, test,
              test, ============, ======,=,=,=====df=, ds=f,sdf=s=d,f
            </p>
            <a
              className="arrow-btn-git"
              href="google.com"
              target="_blank"
              style={{ left: "71.5%" }}
            >
              <RiGithubLine />
            </a>
          </article>
        </a>
        <a href="jackt.xyz" target="_blank" className="proj box tc">
          <article>
            {/* <img src={TC} alt="captionMe" className="proj-logo" /> */}
            {/* <iframe className="proj-bg" src="https://kay0ss.github.io/csb-0g3fh/" /> */}

            <a
              className="arrow-btn-long-proj"
              href="https:www.jackt.xyz"
              target="_blank"
            >
              <BsArrowUpRight />
              <p className="btn-text">True Crime Quiz</p>
            </a>
            <p style={{ opacity: "0" }} className="description">
              this is just a test, test, test, test, test, test, test, test,
              test, ============, ======,=,=,=====df=, ds=f,sdf=s=d,f
            </p>
            <a
              style={{ left: "73%" }}
              className="arrow-btn-git"
              href="google.com"
              target="_blank"
            >
              <RiGithubLine />
            </a>
          </article>
        </a>
        <a href="jackt.xyz" target="_blank" className="proj box swq">
          <article>
            {/* <img src={SWQ} alt="captionMe" className="proj-logo" /> */}
            {/* <iframe className="proj-bg" src="https://kay0ss.github.io/csb-0g3fh/" /> */}

            <a
              className="arrow-btn-long-proj"
              href="https:www.jackt.xyz"
              target="_blank"
            >
              <BsArrowUpRight />
              <p className="btn-text">Star Quiz</p>
            </a>
            <p style={{ opacity: "0" }} className="description">
              this is just a test, test, test, test, test, test, test, test,
              test, ============, ======,=,=,=====df=, ds=f,sdf=s=d,f
            </p>
            <a className="arrow-btn-git" href="google.com" target="_blank">
              <RiGithubLine />
            </a>
          </article>
        </a>
        <a href="jackt.xyz" target="_blank" className="proj box nft">
          <article>
            {/* <img src={CM} alt="captionMe" className="proj-logo" /> */}
            {/* <iframe className="proj-bg" src="https://kay0ss.github.io/csb-0g3fh/" /> */}

            <a
              className="arrow-btn-long-proj"
              href="https://kay0ss.github.io/nft-preview-card/"
              target="_blank"
            >
              <BsArrowUpRight />
              <p className="btn-text">Nft Card</p>
            </a>
            <p style={{ opacity: "0" }} className="description">
              this is just a test, test, test, test, test, test, test, test,
              test, ============, ======,=,=,=====df=, ds=f,sdf=s=d,f
            </p>

            <a className="arrow-btn-git" href="https://github.com/Kay0ss/nft-preview-card" target="_blank">
              <RiGithubLine />
            </a>
          </article>{" "}
        </a>
      </div>
    </>
  );
}

export default Projects;
