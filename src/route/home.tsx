import React from "react";
import { Menu } from "../components/menu/menu";
import { NavBar } from "../components/navbar/navBar";
import { About } from "../pages/about/about";
import { Contact } from "../pages/contactme/contactme";
import { Footer } from "../pages/footer/footer";
import { Landing } from "../pages/landing/landing";
import { Projects } from "../pages/projects/projects";

export const Home = () => {
  return (
    <>
      <Menu />
      <NavBar />
      <Landing />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};
