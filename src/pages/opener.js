import React, { Component } from 'react';
import Site from '../components/site';

class Opener extends Component {
    state = { 
        
    }

    
    render() { 
        return ( 
            <div className="opener">
                <h1>Pick a site to visit - {this.props.sitePage}</h1>
                <div id="sites">
                    <div style={{marginLeft: '20px'}}><Site site={"bikes"}/></div>
                    <div style={{marginLeft: '220px'}}><Site site={"sofas"}/></div>
                    <div style={{marginLeft: '420px'}}><Site site={"hats"}/></div>
                    <div style={{marginLeft: '620px'}}><Site site={"plants"}/></div>
                </div>
            </div>
         );
    }
}
 
export default Opener;