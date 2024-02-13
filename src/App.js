import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/main.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";



function App() {
  return (
    <div className="App">
    
        <Home />
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>

    </div>
  );
}

export default App;
