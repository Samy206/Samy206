import logo from './logo.svg';
import './App.css';

function fuckOff(show) {
  return show;
}

function App() {

  let show_div = false;

  return (q
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
          <p>
              So now I'm going to try to create a button that will make appear a fuck off sign
          </p>
          <button onClick={fuckOff}>
              Click on me
          </button>
      </header>

    </div>
  );
}

export default App;
