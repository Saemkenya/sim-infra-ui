import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>187 Computer Applications.</p>
        <a
          className="App-link"
          href="apps.187ca.co.ke/siminfra"
          target="_blank"
          rel="noopener noreferrer"
        >
          SIM INFRA
        </a>
        <p>Manage all your sim cards from one spot</p>
      </header>
    </div>
  );
}

export default App;
