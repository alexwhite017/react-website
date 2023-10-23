import About from "./Components/About";
import Intro from "./Components/Intro";
import NavBar from "./Components/NavBar";
import Portfolio from "./Components/Portfolio";
import Resume from "./Components/Resume/Resume";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Intro />
      <About />
      <Resume />
      <Portfolio />
    </div>
  );
};

export default HomePage;
