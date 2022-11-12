import { Link } from "react-router-dom";
const NotFound = () => (
  <div className="container">
    <h1>404</h1>
    <p> Page not found</p>
    <Link to="/">Home</Link>
  </div>
);
export default NotFound;
