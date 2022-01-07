import React from "react";
import "./home.css";
import Nav from "./nav";
import Masonry from "react-masonry-css";

function Home() {
  return (
    <>
    <Nav />
    <Masonry
      breakpointCols={4}
      className="masonry"
      columnClassName="my-masonry-grid_column"
    >
      <div className="box about"></div>
      <div className="box box-sq"></div>
      <div className="box box-v"></div>
      <div className="box box-sq"></div>
      <div className="box box-sq"></div>
      <div className="box box-h"></div>
      <div className="box box-h"></div>
      <div className="box box-h"></div>
      <div className="box box-h"></div>
      {/* array of JSX items */}
    </Masonry>
    </>

    // <>
    //   <div>
    //     <Nav />
    //   </div>
    //   <div className="box-container">
    //     <div className="box about"></div>
    //     <div className="box box-sq"></div>
    //     <div className="box box-v"></div>
    //     <div className="box box-sq"></div>
    //     <div className="box box-sq"></div>
    //     <div className="box box-h"></div>
    //     <div className="box box-h"></div>
    //     <div className="box box-h"></div>
    //     <div className="box box-h"></div>
    //   </div>
    // </>
  );
}

export default Home;
