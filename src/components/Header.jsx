import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link } from "react-router-dom";
const Header = ({ theme, setTheme }) => {
  return (
    <div className="container">
      <Link to="/" className="logo">
        <h2>Where in the world?</h2>
      </Link>
      <nav
        onClick={() => setTheme((prev) => (prev === " dark" ? "" : " dark"))}
      >
        <div className="mode-switcher">
          <FontAwesomeIcon icon={!theme ? regular("moon") : solid("moon")} />
          <span>dark mode</span>
        </div>
      </nav>
    </div>
  );
};

export default Header;
