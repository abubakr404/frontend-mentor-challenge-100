import { useState } from "react";
import Main from "./components/Main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

function App() {
  const [theme, setTheme] = useState("app");
  return (
    <div className={theme}>
      <header>
        <div className="container">
          <div className="logo">
            <h2>Where in the world?</h2>
          </div>
          <nav onClick={() => setTheme(theme === "app" ? "app dark" : "app")}>
            <div className="mode-switcher">
              <FontAwesomeIcon icon={solid("moon")} />
              <span>dark mode</span>
            </div>
          </nav>
        </div>
      </header>
      <Main />
    </div>
  );
}

export default App;
