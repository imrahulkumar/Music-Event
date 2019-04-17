import React from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from './MyButton'
const Discount = () => {
    return (
        <div className="center_wrapper">
            <div className="discount_wrapper">
                <Fade>
                    <div className="discount_porcentage">
                        <span>23%</span>
                        <span>OFF</span>
                    </div>
                </Fade>
                <Slide right>
                    <div className="discount_description">
                        <h3>Purchase ticket before 20th JUNE</h3>
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                    </p>
                    <MyButton text = "purchase tickets"
                          bck = "#ffa800"
                          color = "#ffffff"
                          link = "https://www.linkedin.com/in/rahul-kumar-87451486/"/>
                    </div>
                </Slide>
            </div>
        </div>
    );
};

export default Discount;