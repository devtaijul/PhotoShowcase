import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col col-auto my-auto">
              <a href="/" className="logo">
                PhotoShowcase
              </a>
            </div>
            <div className="col my-auto text-right">
              <div className="main-manu">
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/disclaimer">Disclaimer</a>
                  </li>
                  <li>
                    <a href="/credit">Credit</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
