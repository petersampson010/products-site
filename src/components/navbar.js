import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <div id="navbar">
                    <ul><NavLink exact to={'/home'}>Home</NavLink></ul>
                    <ul><NavLink exact to={'/products'}>Products</NavLink></ul>
                    <ul><NavLink exact to={'/basket'}>Basket</NavLink></ul>
            </div>
         );
    }
}
 
export default NavBar;