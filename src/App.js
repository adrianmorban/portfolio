import NavBar from "./components/navbar";
import HeroSection from './components/herosection';
import AboutMe from './components/aboutme';
import Projects from './components/projects';
import Contact from "./components/contact";
import Footer from "./components/footer";
import "./resources/portfolio.css"

function App() {
  return (
    <div className="App">
      <div className="mainContainer" id="home">
        <NavBar/>
        <HeroSection/>
      </div>
      <AboutMe/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
