import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Projects from "./components/Projects/Projects"

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Projects />
      <Footer />
    </>
  );
};

export default App;
