// Components
import React, { Component } from 'react';
import { BreakpointProvider} from "react-socks";

import { NavLink } from "react-router-dom";

// Styles
import '../styles/Nav.css';



export default class Layout extends Component {
  render() {
    return (
      <div className="container">
        <section className="header">
          <div className="empire_prop">
           <NavLink to="/" className="home_link">Empire Properties</NavLink>
          </div>
          <div className="phone">
           <a href="tel:919-834-8350">919.834.8350</a>
          </div>
        </section>
        <BreakpointProvider>
        <nav className="nav_bar">
          <div>
            <NavLink to="/" className="nav_1">Home</NavLink>
          </div>
          <div>
            <NavLink to="/availableproperties" className="nav_2">Available Properties</NavLink>
          </div>
          <div>
            <NavLink to="/commercialproperties" className="nav_3">Commercial Properties</NavLink>
          </div>
          <div>
            <a href="http://empireeats.com/" target="_blank" rel="noopener noreferrer">Empire Eats</a>
          </div>
          <div>
            <NavLink to="" className="">About Us</NavLink>
          </div>
          <div>
            <NavLink to="" className="">Downtown Raleigh</NavLink>
          </div>
          <div>
            <NavLink to="" className="">Contact Us</NavLink>
          </div>
        </nav>
        </BreakpointProvider>
        <section>
          {this.props.children}
        </section>
        <section>
          <div className="footer">

          </div>
          <div className="purple">
          </div>
        </section>
      </div>
    )
  }
}
