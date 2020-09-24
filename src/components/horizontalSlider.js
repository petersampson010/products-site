import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { connect } from 'react-redux';

class HorizontalSlider extends Component {
    state = { 
        index: 0
     }
    //  componentDidMount() {
    //      console.log(this.props.carousel)
    //  }
    render() { 
        return ( 
            <div>  
                         <div class='container-fluid' >  
                          <div className="row title" style={{ marginBottom: "20px" }} >  
                          <div class="col-sm-12 btn btn-warning">  
                          How To Use Bootstrap Carousel In ReactJS  
                         </div>  
                         </div>  
                         </div>  
                         <div className='container-fluid' >  
                         <Carousel>  
                         <Carousel.Item style={{'height':"300px"}} >  
                         <img style={{'height':"300px"}}  
                         className="d-block w-100"  
                        src={this.props.carousel["image1"]}  />  
                           <Carousel.Caption>  
                             <h3>First Demo </h3>  
                                 </Carousel.Caption>  
                                 </Carousel.Item  >  
                                 <Carousel.Item style={{'height':"300px"}}>  
                                 <img style={{'height':"300px"}}  
                                   className="d-block w-100"  
                                    src={this.props.carousel["image2"]}    />  
                                       <Carousel.Caption>  
                                   <h3>Second Demo</h3>  
                                      </Carousel.Caption>  
                                         </Carousel.Item>  
                                       <Carousel.Item style={{'height':"300px"}}>  
                                       <img style={{'height':"300px"}}  
                                        className="d-block w-100"  
                                         src={this.props.carousel["image3"]}   />  
                                        <Carousel.Caption>  
                                          <h3>Third Demo</h3>  
                                          </Carousel.Caption>  
                                         </Carousel.Item>  
                                        </Carousel>  
                                </div>  
                        </div>
            // <Carousel activeIndex={this.state.index}>
            //     <Carousel.Item>
            //         <img className="d-block w-100" src={this.props.carousel["image1"]} alt="image1"/>
            //         <Carousel.Caption>
            //             <h3>SOMETHING</h3>
            //             <p>{this.props.carousel["text1"]}</p>
            //         </Carousel.Caption>
            //     </Carousel.Item> 
            //     <Carousel.Item>
            //         <img className="d-block w-100" src={this.props.carousel["image2"]} alt="image2"/>
            //         <Carousel.Caption>
            //             <h3>SOMETHING</h3>
            //             <p>{this.props.carousel["text2"]}</p>
            //         </Carousel.Caption>
            //     </Carousel.Item> 
            //     <Carousel.Item>
            //         <img className="d-block w-100" src={this.props.carousel["image3"]} alt="image3"/>
            //         <Carousel.Caption>
            //             <h3>SOMETHING</h3>
            //             <p>{this.props.carousel["text3"]}</p>
            //         </Carousel.Caption>
            //     </Carousel.Item> 
            // </Carousel>
         );
    }
}

const mapStateToProps = state  => {
    return {
        carousel: state.carousel
    }
}
    
 
export default connect(mapStateToProps)(HorizontalSlider);