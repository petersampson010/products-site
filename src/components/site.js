import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setSitePage, setSiteCarousel, setSiteProducts } from '../redux/actions';
import { NavLink } from 'react-router-dom';

class Site extends Component {

    state = {
    }

    fetchSiteData = site => {
        fetch('http://localhost:3000/' + site)
        .then(res => res.json())
        .then(products => {
                this.props.setSiteProducts(products);
                this.props.setSitePage(site);
                this.fetchSiteCarousel(site);
            })
    }

    fetchSiteCarousel = site => {
        fetch('http://localhost:3000/carousels')
        .then(res => res.json())
        .then(data => data.filter(x => x.site===site)[0])
        .then(carousel => this.props.setSiteCarousel(carousel))
    }

    render() { 
        return ( 
            <NavLink exact to={'/home'} className="navlink">
                <div className="site" onClick={() => this.fetchSiteData(this.props.site)}>
                    <h3>{this.props.site.toUpperCase()}</h3>
                </div>
            </NavLink>
         );
    }
}

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setSitePage: site => dispatch(setSitePage(site)),
        setSiteProducts: products => dispatch(setSiteProducts(products)),
        setSiteCarousel: carousel => dispatch(setSiteCarousel(carousel))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Site);