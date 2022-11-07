import { useState } from "react";
import Main from "./components/Main";
import CountryDetails from "./pages/CountryDetails";
import { Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

function App() {
  const [theme, setTheme] = useState("app");
  return (
    <div className={theme}>
      <header>
        <div className="container">
          <Link to="/" className="logo">
            <h2>Where in the world?</h2>
          </Link>
          <nav onClick={() => setTheme(theme === "app" ? "app dark" : "app")}>
            <div className="mode-switcher">
              <FontAwesomeIcon icon={solid("moon")} />
              <span>dark mode</span>
            </div>
          </nav>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/details" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
