import react from "react";
// import captionMe from "../../images/photoshop.png";
import SWQ from "../../images/star-wars-quiz.png";
import TC from "../../images/True-Crime.png";
import CM from "../../images/caption-me.png";
import { BsArrowUpRight } from "react-icons/bs";
import "./projects.scss";

function Projects() {
  return (
    <>
      <div className="proj-page-container">
        <article className="proj box cm">
          {/* <img src={CM} alt="captionMe" className="proj-logo" /> */}
          {/* <iframe className="proj-bg" src="https://kay0ss.github.io/csb-0g3fh/" /> */}
          <a
            className="arrow-btn-long"
            href="https:www.jackt.xyz"
            target="_blank"
          >
            <BsArrowUpRight />
            <p className="btn-text">CaptionMe(me)</p>
          </a>
        </article>
        <article className="proj box tc">
          {/* <img src={TC} alt="captionMe" className="proj-logo" /> */}
          {/* <iframe className="proj-bg" src="https://kay0ss.github.io/csb-0g3fh/" /> */}

          <a
            className="arrow-btn-long"
            href="https:www.jackt.xyz"
            target="_blank"
          >
            <BsArrowUpRight />
            <p className="btn-text">Old Site</p>
          </a>
        </article>
        <article className="proj box swq">
          {/* <img src={SWQ} alt="captionMe" className="proj-logo" /> */}
          {/* <iframe className="proj-bg" src="https://kay0ss.github.io/csb-0g3fh/" /> */}

          <a
            className="arrow-btn-long"
            href="https:www.jackt.xyz"
            target="_blank"
          >
            <BsArrowUpRight />
            <p className="btn-text">Old Site</p>
          </a>
        </article>
        <article className="proj box">
          <img src={CM} alt="captionMe" className="proj-logo" />
          {/* <iframe className="proj-bg" src="https://kay0ss.github.io/csb-0g3fh/" /> */}

          <a
            className="arrow-btn-long"
            href="https:www.jackt.xyz"
            target="_blank"
          >
            <BsArrowUpRight />
            <p className="btn-text">Old Site</p>
          </a>
        </article>
      </div>
    </>
  );
}

export default Projects;
