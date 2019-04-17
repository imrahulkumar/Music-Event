import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14035.681060954505!2d77.5254432!3d28.4216627!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8c72169fdd7154b0!2sGautam+Buddha+University!5e0!3m2!1sen!2sin!4v1555514702260!5m2!1sen!2sin"
             width="100%" 
             height="500px"
              frameborder="0" 
               allowFullScreen></iframe>
               <div className="location_tag">
                <div>Location</div>
               </div>
        </div>
    );
};

export default Location;