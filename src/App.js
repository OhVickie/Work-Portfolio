import Navbar from './components/Navbar/nav';
import Intro from './components/Intro/intro.jsx';
import Skill from './components/Skills/skills.jsx';
import Project from './components/Projects/projects.jsx'
import Contact from './components/Contact/contact.jsx'
// import Footer from './components/Footer/footer.jsx';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skill />
      <Project />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default App;