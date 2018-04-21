import React from 'react';
// import NavigationItem from "../navigationItem/NavigationItem";
import {NavLink} from "react-router-dom";
import './NavigationItems.css';

const NavigationItems = () => (
  <div className="NavigationItems">
    <ul>
      <NavLink to="/" exact className="contacts" activeClassName="activeContacts">News</NavLink>
      <NavLink to="/addcontact" className="addContact " activeClassName="activeContacts">Comments</NavLink>
    </ul>
  </div>
);

export default NavigationItems;