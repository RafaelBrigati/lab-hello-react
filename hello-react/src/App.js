
import './App.css';

import logo from "./images/ironhack-logo-xs.png";
import menuIcon from "./images/menu-top-xs.png";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";

function App() {
  return (
    <div className="App">
      <header className="hero">
        <div className="hero-top">
          <img src={logo} alt="Ironhack Logo" className="nav-icon" />
          <img src={menuIcon} alt="Menu Icon" className="nav-icon" />
        </div>

        <div className="hero-content">
          <h1>Say hello to ReactJS</h1>
          <p>You will learn how to use the most popular frontend library and become a super ninja developer.</p>
          <button>Awesome!</button>
        </div>
      </header>
      <main>
        <div className="card">
          <img src={icon1} alt="Icon1" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className="card">
          <img src={icon2} alt="Icon2" />
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className="card">
          <img src={icon3} alt="Icon3" />
          <h3>Single Way</h3>
          <p>A set of immutable values are passed to the components. </p>
        </div>
        <div className="card">
          <img src={icon4} alt="Icon4" />
          <h3>JSX</h3>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </main>






    </div>

  );
}

export default App;
