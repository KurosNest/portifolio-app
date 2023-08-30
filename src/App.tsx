import { Navbar } from "./components/Navbar";
import { HomePage } from "./components/HomePage";
// import AboutMe from "./components/AboutMe";
// import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="bg-[#3baaa6]">
      <Navbar />
      <HomePage />
      {/* <AboutMe />
      <Skills /> */}
      <Projects />
    </div>
  );
}

export default App;
