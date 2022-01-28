import React from 'react';
import ReactDOM from 'react-dom';
import './Recommendations.css';
// import Button from '@mui/material/Button';

const AllRecommendations = () => {
  return( <>
      <div className='right_recom'>
      {/* <Button variant="contained" color="primary">
      Hello World
    </Button>  */}
    <div className='headingPart'>
             <h5 className='heading_recom'>  Best Recommendations for you :- </h5>
            </div>
             <div className='para_recom'>

                 <h5>Lorem ipsum, or lipsum as it is sometimes known,</h5>
                 <ul>
                     <li>
                         <h3 className='optionsName'>Fan based room heaters</h3>
                     </li>

                     <li>
                         <h3  className='optionsName'>Radiant room heaters</h3>
                     </li>

                     <li>
                         <h3  className='optionsName'>Oil based room heaters</h3>
                     </li>
                 </ul>
                 <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled 
                 parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:</p>
             </div>

      </div>

      
  </>)
};

export default AllRecommendations;
