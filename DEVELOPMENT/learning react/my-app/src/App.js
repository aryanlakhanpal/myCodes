import AboutMe from './AboutMe/AboutMe';
import './App.css';
function App() {
  return (
    <>
    <div id= "container">
    
      <div id="page1" className="page">
      <div id= "myGrid">
        <div className= "element" id="e1">hello ji</div>
        <div className= "element" id="e2">mello ji</div>
        <div className= "element" id="e3">fello ji</div>
        <div className= "element" id="e4">zello ji</div>
      </div>
      </div>
      <div id="page2" className="page">
        <AboutMe name="Aryan" surname="lakhanpal"/>
      </div>
      
    </div>

    </>
  );
}

export default App;
