import { Navbar } from "./components/Navbar";
import { HomePage } from "./components/HomePage";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import WIP from "./components/WIP";

function App() {
  return (
    <div className="bg-[url('/src/assets/watercolorPaperTile2.jpg')]">
      <Navbar />
      <HomePage />
      <AboutMe />
      <Skills />
      <Projects />
      <WIP/>
      <WIP/>
      <WIP/>
    </div>
  );
}

export default App;
