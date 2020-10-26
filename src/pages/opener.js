import React, { Component } from 'react';
import Site from '../components/site';

class Opener extends Component {
    state = { 
        
    }

    
    render() { 
        return ( 
            <div className="opener">
                <h1 id="welcome-header">Welcome!</h1>
                <div id="cloud">
                    <h2 id="cloud-text">Please chose a site you would like to visit</h2>
                </div>   
                <div id="sites">
                    <div className="site-link"><Site site={"bikes"}/></div>
                    <div className="site-link"><Site site={"sofas"}/></div>
                    <div className="site-link"><Site site={"hats"}/></div>
                    <div className="site-link"><Site site={"plants"}/></div>
                </div>
                <p id="side-note">These are all example pages and nothing shown here is for sale. The site has been designed in this way to display the use of multiple reusable components. Every site has different products and information but the same React components rendering them.</p>
            </div>
         );
    }
}
 
export default Opener;