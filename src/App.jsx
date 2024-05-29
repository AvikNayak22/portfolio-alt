import "./App.css";
import Bio from "./sections/Bio";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 p-3 md:p-7 ">
        <div className="">
          <Bio />
          <Skills />
        </div>
        <div className="col-span-2">
          <Projects />
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
