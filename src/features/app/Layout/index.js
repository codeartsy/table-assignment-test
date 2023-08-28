import React from "react";
import { NavLink } from "react-router-dom";
import './Layout.css';


const Layout=({ children })=>{
  const [showNavbar, setShowNavbar] = React.useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const MobileMenuIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="52"
      height="24"
      viewBox="0 0 52 24"
    >
      <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
        <rect
          id="Rectangle_3"
          data-name="Rectangle 3"
          width="42"
          height="4"
          rx="2"
          transform="translate(304 47)"
          fill="#fff"
        />
        <rect
          id="Rectangle_5"
          data-name="Rectangle 5"
          width="42"
          height="4"
          rx="2"
          transform="translate(304 67)"
          fill="#fff"
        />
        <rect
          id="Rectangle_4"
          data-name="Rectangle 4"
          width="52"
          height="4"
          rx="2"
          transform="translate(294 57)"
          fill="#fff"
        />
      </g>
    </svg>
  );

  return(
    <div>
      <nav className="navbar">
        <div className="menu-container">
          <div className="menu-icon" onClick={handleShowNavbar}>
            <MobileMenuIcon />
          </div>
          <div className={`nav-elements  ${showNavbar && "active-link"}`}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="body-container">
        { children }
      </div>
    </div>
  );
}

export default Layout;