import React from 'react';
import './Recommendations.css';
import recomImg1 from "../images/Microwave_image.jpeg";
import Button from '@mui/material/Button';

const RecommendationBottom = () => {
  return <>
      <div className='right_recom' style={{marginTop:"20px" , marginBottom:"20px"}}>
          <div className='headingPart'>
              <h5>   Best Handpicked Products
              <h6 style={{marginTop:"10px"}}>Fan based room heaters</h6>
              </h5>

          </div>

<div className=' container-fluid recoms'>
    <div className='row'>
        <div className='col-md-5'><img src={recomImg1}/></div>
        <div className='col-md-7 recomContent' >
            <h6><a href='#'>Orpat Oeh-1220 Fan Room Heater</a></h6>
            <p style={{paddingTop:"20px"}}>ORPAT Group is a pioneer in India to develop in-house C.O.B. Technology. Being an ISO-9002 &
             14001 Certified Company, it assures quality process, quality management systems and quality
              products. Quality Control and Quality Assurance processes are well designed to ensure superior 
              quality products. Packaging processes are also so well designed to ensure scratch free delivery
               to the end users.</p>

                     <Button className='latestPriceBtn' variant="contained" >
      Check the Latest Price
    </Button> 
        </div>


        <div className='col-md-5'><img src={recomImg1}/></div>
        <div className='col-md-7 recomContent' >
            <h6><a href='#'>Orpat Oeh-1220 Fan Room Heater</a></h6>
            <p style={{paddingTop:"20px"}}>ORPAT Group is a pioneer in India to develop in-house C.O.B. Technology. Being an ISO-9002 &
             14001 Certified Company, it assures quality process, quality management systems and quality
              products. Quality Control and Quality Assurance processes are well designed to ensure superior 
              quality products. Packaging processes are also so well designed to ensure scratch free delivery
               to the end users.</p>

                     <Button className='latestPriceBtn' variant="contained" >
      Check the Latest Price
    </Button> 
        </div>
    </div>
</div>


      </div>
  </>;
};

export default RecommendationBottom;
