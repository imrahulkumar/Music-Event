import React, { Component } from 'react';
import MyButton from './MyButton';
import Zoom from 'react-reveal'
class Pricing extends Component {

state = {
    prices:[100,150,250],
    position:['Balcony','Medium','Star'],
    desc:['Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium'],
    linkto:['https://www.linkedin.com/in/rahul-kumar-87451486/',
'https://www.linkedin.com/in/rahul-kumar-87451486/',
'https://www.linkedin.com/in/rahul-kumar-87451486/'],
delay:[500,0,500]

}

showBoxes = ()=>(

    this.state.prices.map((box,i)=>(
        <Zoom delay={this.state.delay[i]} key={i}>
        <div className="pricing_item">
            <div className="pricing_inner_wrapper">
              <div className="pricing_title">
                  <span>Rs.{this.state.prices[i]}</span>
                  <span>{this.state.position[i]}</span>
                    </div>
              <div className="pricing_description">
              <span>{this.state.desc[i]}</span>
              </div>
              <div className="pricing_buttons ">
                  <MyButton 
                  text = "Purchase"
                  bck = "#ffa800"
                  color = "#ffffff"
                  link = {this.state.linkto[i]}/>
              </div>
            </div>
        </div>
    </Zoom>
    ))
)
   


    render() {
        return (
            <div className="bck_black">
            <div className="center_wrapper pricing_section">
            <h2>Pricing</h2>
            <div className="pricing_wrapper">
                 {this.showBoxes()}
            </div>
                </div>                
            </div>
        );
    }
}

export default Pricing;