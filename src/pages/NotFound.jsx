import { Link } from "react-router-dom";
const NotFound = () => (
  <div className="container">
    <h1>404</h1>
    <p> Page not found</p>
    <Link to="/frontend-mentor-challenge-100">Home</Link>
  </div>
);
export default NotFound;
