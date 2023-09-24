import "./style.css";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <nav className="menu">
      <h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about" state={'State from ABOUT'}>About</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/posts/10">Posts 10</Link>
          </li>
          <li>
            <Link to="/redirect">Redirect</Link>
          </li>
        </ul>
      </h1>
    </nav>
  );
};
