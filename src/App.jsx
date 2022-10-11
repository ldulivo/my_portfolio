import AboutMe from './AboutMe/AboutMe';
import Academic from './Academic/Academic';
import ContactMe from './ContactMe/ContactMe';
import Dialog from './Dialog';
import Footer from './Footer/Footer';
import Header from './Header';
import NavBar from './NavBar';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <Projects />
      <AboutMe />
      <Skills />
      <Academic />
      <ContactMe />
      <Footer />
      <Dialog />
      <NavBar />
    </div>
  );
}

export default App;
