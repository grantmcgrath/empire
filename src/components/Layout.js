import React, { Component } from 'react';

import { NavLink } from "react-router-dom";

import '../styles/Home.css';



export default class Layout extends Component {
  render() {
    return (
      <div>
        <nav>
          <div>
            <NavLink to="/" classname="nav_1">Home</NavLink>
          </div>
          <div>
            <NavLink to="/availableproperties" classname="nav_2">Available Properties</NavLink>
          </div>
          <div>
            <NavLink to="/commericalproperties" classname="nav_3">Commercial Properties</NavLink>
          </div>
        </nav>
        <section>
          {this.props.children}
        </section>
      </div>
    )
  }
}
