import React from "react";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "../src/styles/app.css";
const App = () => {
  return (
    <div className="main-container">
      <Header />

      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
