
import React, { Component } from "react";
import { Grid } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Grid fluid>
          <nav className="pull-left">
            <ul>
              <li>
                <a href="http://localhost:3000/admin/dashboard">Home</a>
              </li>
              <li>
                <a href="http://localhost:3000/admin/dashboard">Company</a>
              </li>
              <li>
                <a href="http://localhost:3000/admin/dashboard">Portfolio</a>
              </li>
              <li>
                <a href="http://localhost:3000/admin/dashboard">Blog</a>
              </li>
            </ul>
          </nav>
          <p className="copyright pull-right">
            &copy; {new Date().getFullYear()}{" "}
            <a href="http://localhost:3000/admin/dashboard">
              DashBoard
            </a>
          </p>
        </Grid>
      </footer>
    );
  }
}

export default Footer;
