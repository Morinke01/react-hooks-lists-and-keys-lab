import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>

    <a href="#home">home</a>
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
  </nav>;
}

export default NavBar;
