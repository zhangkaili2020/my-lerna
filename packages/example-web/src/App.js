import logo from './logo.svg';
import uiCommon from 'ui-common'
import './App.css';

function App() {
  console.log('ui--', uiCommon(), )
  return (
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
        <>{uiCommon()}</>
      </header>
    </div>
  );
}

export default App;
