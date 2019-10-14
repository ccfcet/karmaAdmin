import React from 'react';
import {NavLink} from 'react-router-dom';

function Topnav() {
  return (
    <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        {/* <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="/">karma Admin</a> */}
        <NavLink to="/" style={{textDecoration: 'none'}} className="navbar-brand col-sm-3 col-md-2 mr-0">karma Admin</NavLink>
    </nav>

  );
}

export default Topnav;
