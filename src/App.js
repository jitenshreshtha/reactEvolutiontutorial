import './App.css';
import C6Destructing from './Components/C6Destructing';
// import C5setState from './Components/C5setState';
// import C4State from './Components/C4State';
// import C1Greet from './Components/C1Greet';
// import C2Classes from './Components/C2Classes';
// import C3prop from './Components/C3prop';

function App() {
  return (
    <div>
      {/* <C1Greet /> */}
      {/* <C2Classes /> */}
      {/* <C3prop name="Jiten" heroName="Batman"/> */}
      {/* <C3prop name="Suchin" heroName="Superman" /> */}
      {/* <C3prop name="Sundar" heroName="Spiderman" /> */}
      {/* <C4State /> */}
      {/* <C5setState /> */}
      <C6Destructing name="Jiten" heroName="Batman" />
    </div>
  );
}

export default App;
