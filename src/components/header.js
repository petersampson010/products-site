import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    
    state = {  }

    capitalize = (string) => {
        let fl = string.charAt(0).toUpperCase()
        return fl + string.slice(1);
    }

    render() { 
        return ( 
            <h1>
                {this.capitalize(this.props.sitePage)}
            </h1>
         );
    }
}

const mapStateToProps = state => {
    return {
        sitePage: state.sitePage
    }
}
 
export default connect(mapStateToProps)(Header);