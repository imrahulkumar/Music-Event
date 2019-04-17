import React from 'react';
import Fade from 'react-reveal/Fade'
const Footer = () => {
    return (
        <footer className="bck_red">
          <Fade delay={500}>
          <div className="front_righteous footer_logo_venue">
              Gautam Buddha University
          </div>
          <div className="footer_copyright">
       The venue. All rights reserved
          </div>
              </Fade>  
        </footer>
    );
};

export default Footer;