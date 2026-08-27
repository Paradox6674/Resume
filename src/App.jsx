import Achievment from "./Component/Achievment.jsx";
import Coursework from "./Component/Coursework.jsx";
import Education from "./Component/Education.jsx";
import Header from "./Component/Header.jsx";
import Projects from "./Component/Projects.jsx";
import Skills from "./Component/Skills.jsx";
import Summary from "./Component/Summary.jsx";
const App = () => {
  return (
    <div className="Bod">
      <Header />
      <Summary />
      <Education />
      <Achievment />
      <Projects />
      <Skills />
      <Coursework />
    </div>
  );
};

export default App;
