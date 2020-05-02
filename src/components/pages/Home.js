import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import "./Home.css";
import { render } from "react-dom";

class Home extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg  navbar-light  bg-success">
        <div className="wrapper">
          <a className="navbar-brand" href="#" style={{ color: "white" }}>
            Donationally
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a
                className="nav-link"
                href="#"
                style={{ color: "white", marginRight: "10px" }}
              >
                Donate <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                style={{ color: "white", marginRight: "10px" }}
              >
                Map
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                style={{ color: "white", marginRight: "10px" }}
              >
                Blog/Chat
              </a>
            </li>
          </ul>
        </div>
        <li className="nav-item" style={{ listStyle: "none" }}>
          <a
            className="nav-link"
            href="/Portal"
            style={{ color: "white", margin: "5px" }}
          >
            <i className="fas fa-home" style={{ padding: "5px" }}></i>
            Portal (sign in)
          </a>
        </li>
        <li className="nav-item" style={{ listStyle: "none" }}>
          <a
            className="nav-link"
            href="#"
            style={{ color: "white", margin: "5px" }}
          >
            <i className="fas fa-user-alt" style={{ padding: "5px" }}></i>
            About Us
          </a>
        </li>
      </nav>
    );
  }
}

export default Home;
