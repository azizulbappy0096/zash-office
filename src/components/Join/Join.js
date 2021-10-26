// modules
import React from "react";
import { Parallax } from "react-parallax";

// css
import "./Join.css";

function ArrowIconRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  );
}

function Join() {
  return (
    <Parallax bgImage="/images/companies/join-bg.jpg" strength={500}>
      <div className="join">
        <div className="container">
          <div className="join__content">
            <h2> Zash is a community where everyone is welcome. </h2>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <button className="default-btn d-flex align-items-center my-0 mx-auto">
              {" "}
              Join now <ArrowIconRight />{" "}
            </button>
          </div>
        </div>
      </div>
    </Parallax>
  );
}

export default Join;
