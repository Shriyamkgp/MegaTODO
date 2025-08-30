import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import headerIcon from "../Photos/header_icon.png";
export default function Header(props) {
  return (
    <>
      <img
        src={headerIcon}
        alt="icon"
        style={{
          height: "50px",
          width: "auto",
          position: "absolute",
          margin: "2px",
          zIndex: "1000",
        }}
      />
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <label
              style={{
                margin: "auto auto auto 50px",
                fontSize: "30px",
                color: "maroon",
                fontFamily: "emoji",
              }}
            >
              {props.title}
            </label>
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
            </ul>
            {props.searchBar ? (
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            ) : (
              ""
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

Header.defaultProps = {
  title: "Your Title Here",
  searchBar: true,
};

Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired,
};
