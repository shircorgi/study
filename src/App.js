// import logo from "./logo.svg";
import App from "./App.css";
import Header from "./project1/component/Header.css";
import Nav from "./project1/component/Nav.css";
import Aside from "./project1/component/Aside.css";
import Article from "./project1/component/Article.css";
import Footer from "./project1/component/Footer.css";

function App() {
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
      </header>
    </div>
  );
}

export default App;
