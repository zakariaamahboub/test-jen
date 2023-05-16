import logo from "./logo.svg";
import "./App.css";

function App() {
  var a = NaN;

  if (a === NaN) {
    // Noncompliant; always false
    console.log("a is not a number"); // this is dead code
  }
  if (a !== NaN) {
    // Noncompliant; always true
    console.log("a is not NaN"); // this statement is not necessarily true
  }
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <input>test</input>
    </div>
  );
}

export default App;
