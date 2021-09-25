import React from "react";
import { HashRouter as Router, NavLink, Switch, Route } from "react-router-dom";
import MacroCopyApp from "./app";
import Usage from "./usage";

const MacroCopy: React.FC = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            マクロコピ郎君(β)
          </a>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  className="nav-link"
                  activeClassName="active"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/usage"
                  className="nav-link"
                  activeClassName="active"
                >
                  使い方/Usage
                </NavLink>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://peing.net/ja/attribute_k"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ご要望(質問箱)
                </a>
              </li>
            </ul>
            <span className="navbar-text">©2020 attribute_k</span>
          </div>
        </div>
      </nav>
      <Switch>
        <Route path="/usage">
          <Usage />
        </Route>
        <Route path="/">
          <MacroCopyApp />
        </Route>
      </Switch>
    </Router>
  );
};

export default MacroCopy;
