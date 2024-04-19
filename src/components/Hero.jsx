import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <h1 style={{ fontSize: "2.5rem", fontWeight: "800", color: "white" }}>
          Sumz{" "}
        </h1>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient ">Sumz</span>
      </h1>
      <h2 className="desc">Simplify your reading with Sumz</h2>
    </header>
  );
};

export default Hero;
