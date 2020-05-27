import React, { Component } from 'react';

import { NavLink } from "react-router-dom";

import '../styles/Nav.css';



export default class Layout extends Component {
  render() {
    return (
      <div className="container">
        <section className="container">
          <p>Empire Properties</p>
        </section>
        <nav>
          <div>
            <NavLink to="/" className="nav_1">Home</NavLink>
          </div>
          <div>
            <NavLink to="/availableproperties" className="nav_2">Available Properties</NavLink>
          </div>
          <div>
            <NavLink to="/commercialproperties" className="nav_3">Commercial Properties</NavLink>
          </div>
        </nav>
        <section>
          {this.props.children}
        </section>
        <section className="footer">
          <p>end</p>
        </section>
      </div>
    )
  }
}
