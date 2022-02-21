import './App.scss';
import Header from './components/header/Header'
import Home from './components/home/Home'
import AboutMe from './components/about-me/AboutMe'
import WorkExperience from './components/work-experience/WorkExperience'
import Education from './components/education/Education'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'

function App() {
  const wavyEffect = (bgColor, fillColor) => {
    return(
      <div style={{height: '150px', overflow: 'hidden'}} >
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%', backgroundColor: bgColor}}>
          <path d="M-2.54,20.23 C326.46,-48.83 259.87,155.44 500.81,12.34 L503.25,-3.44 L-0.81,-2.44 Z" style={{stroke: 'none', fill: fillColor}}>
          </path>
        </svg>
      </div>
    )
  }

  return (
    <div className="App">
      <Header />
      <div className='backgroundBlue'>
        <div className='backgroundImage'>
          <Home />
          <AboutMe /> 
        </div>
      </div>
      {
        wavyEffect('#DCE0E8', '#09203F')
      }
      <WorkExperience />
      {
        wavyEffect('#E8ECF3', '#DCE0E8')
      }
      <Education />
      {
        wavyEffect('#F8FBFE', '#E8ECF3')
      }
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
