import React from "react";
import moment from "moment";

import './Header.css';

const Header = (props) => {
  return (
    <header className="header">
      <h1>{props.title}</h1>
      <p>{moment().format('dddd, DD MMMM YYYY')}</p>
    </header>
  );
}

export default Header;
