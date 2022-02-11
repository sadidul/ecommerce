import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <nav className="nav-menu container">
      <div className="logo">
        <Link to="/">NOMAD</Link>
      </div>
      <ul className="links">
        <li>
          <Link to="/" className="">
            Home
          </Link>
        </li>
        <li>
          <Link to="/shop" className=" ">
            Shop
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
