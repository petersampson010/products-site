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
            <NavLink exact to={'/home'}>
                <div className="site" onClick={() => this.fetchSiteData(this.props.site)}>
                    <div>
                        <img src={this.props.image} alt="site"/>
                    </div>
                    <div>
                        <h2>The Sites Header - {this.props.site}</h2>
                        <p>Description of what the site is selling and the style implemented to accomodate the products</p>
                    </div>

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