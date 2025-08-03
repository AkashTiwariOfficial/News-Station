import React from "react";
import { Link } from "react-router-dom";

export default function Footer(props) {
  return (
    <div>
      <footer>
        <div className="footer container-fluid px-3">
          <div className="footer-1">
            News-Station – Broadcasting the World's Headlines
          </div>
          <div className="main-footer">
            <div className="main-content">
              <div className="cont-1">
                <p id="items">Get to Know Us</p>
                <ul>
                  <li className="item-1">
                    <Link
                      className="item-link-1"
                      to="/about"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="item-1">
                    <Link
                      className="item-link-1"
                      to="/contact"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="random-cont"></div>
              <div className="cont-2">
                <p id="items"> Connect with Us</p>
                <ul>
                  <li className="item-1">
                    {" "}
                    <Link
                      className="item-link-1"
                      to="https://www.linkedin.com/in/akash-tiwari-4aa047298/"
                    >
                      Linkedin
                    </Link>{" "}
                  </li>
                  <li className="item-1">
                    {" "}
                    <Link
                      className="item-link-1"
                      to="https://www.instagram.com/akashtiwari00624/"
                    >
                      Instagram
                    </Link>{" "}
                  </li>
                  <li className="item-1">
                    {" "}
                    <Link
                      className="item-link-1"
                      to="https://www.facebook.com/profile.php?id=61572388684983"
                    >
                      Facebook
                    </Link>{" "}
                  </li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="container-3">
              <div className="btn-group-wrapper">
                <div className="btn-group">
                  <button
                    className="btn btn-sm btn-secondary"
                    type="button"
                    id="dropdown"
                    style={{ fontSize: "12px" }}
                  >
                    &#127758; Country
                  </button>
                  <button
                    id="dropdown"
                    type="button"
                    className="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="visually-hidden">Toggle Dropdown</span>
                  </button>

                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/"
                        onClick={props.newCountry}
                      >
                        <img
                          src="https://flagsapi.com/US/flat/24.png"
                          alt="...."
                        />{" "}
                        United States
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/"
                        onClick={props.newCountry2}
                      >
                        <img
                          src="https://flagsapi.com/IN/flat/24.png"
                          alt="...."
                        />{" "}
                        India
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/"
                        onClick={props.newCountry3}
                      >
                        <img
                          src="https://flagsapi.com/ZA/flat/24.png"
                          alt="...."
                        />{" "}
                        South Africa
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/"
                        onClick={props.newCountry4}
                      >
                        <img
                          src="https://flagsapi.com/NZ/flat/24.png"
                          alt="...."
                        />{" "}
                        New Zealand
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/"
                        onClick={props.newCountry5}
                      >
                        <img
                          src="https://flagsapi.com/AU/flat/24.png"
                          alt="...."
                        />{" "}
                        Australia
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/"
                        onClick={props.newCountry6}
                      >
                        <img
                          src="https://flagsapi.com/RU/flat/24.png"
                          alt="...."
                        />{" "}
                        Russia
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/"
                        onClick={props.newCountry7}
                      >
                        <img
                          src="https://flagsapi.com/GB/flat/24.png"
                          alt="...."
                        />{" "}
                        United Kingdom
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/"
                        onClick={props.newCountry8}
                      >
                        <img
                          src="https://flagsapi.com/CN/flat/24.png"
                          alt="...."
                        />{" "}
                        China
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="last-footer">
            <div style={{ color: "#b4b4b4", fontSize: "13px", margin: "2px" }}>
              <p style={{ color: "#b4b4b4", fontSize: "13px", margin: "2px" }}>
                Thanks for visiting News-Station — Stay curious. Stay informed.
              </p>
            </div>
            <p style={{ margin: "7px", fontSize: "14px" }}>
              © 2024-2025, NewsStation.com, Inc. or its affiliates
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
