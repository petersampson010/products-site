import React, { Component } from 'react';
import Site from '../components/site';

class Opener extends Component {
    state = { 
        
    }

    
    render() { 
        return ( 
            <div className="opener">
                <h1 id="welcome-header">Welcome!</h1>
                <h1 id="welcome">Please chose a site you would like to visit</h1>
                <h1 id="side-note">These are all example pages and nothing shown here is for sale. The site has been designed in this way to display the use of multiple reusable components. Every site has different products and information but the same React components rendering them. </h1>
                <div id="sites">
                    <div style={{marginLeft: '2vw'}}><Site site={"bikes"}/></div>
                    <div style={{marginLeft: '15vw'}}><Site site={"sofas"}/></div>
                    <div style={{marginLeft: '29vw'}}><Site site={"hats"}/></div>
                    <div style={{marginLeft: '43vw'}}><Site site={"plants"}/></div>
                </div>
            </div>
         );
    }
}
 
export default Opener;