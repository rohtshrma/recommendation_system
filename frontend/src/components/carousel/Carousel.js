import React from 'react';

const Carousel = () => {
  return <div>
   <OwlCarousel items={3}  
          className="owl-theme"  
          loop  
          nav  
          margin={8} 
          autoplay ={true} >  
           <div className="carousel-box" > 
           <div class="card">
           <img  className="img" src= {Pic}/>
            <h1>Tailored Jeans</h1>
            <p class="price">$19.99</p>
            <p>Some text about the jeans..</p>
            <p><button>Add to Cart</button></p>
          </div>
           </div>  
           <div className="carousel-box" > 
           <div class="card">
           <img  className="img" src= {Pic}/>
            <h1>Tailored Jeans</h1>
            <p class="price">$19.99</p>
            <p>Some text about the jeans..</p>
            <p><button>Add to Cart</button></p>
          </div>
           </div>
           <div className="carousel-box" > 
           <div class="card">
           <img  className="img" src= {Pic}/>
            <h1>Tailored Jeans</h1>
            <p class="price">$19.99</p>
            <p>Some text about the jeans..</p>
            <p><button>Add to Cart</button></p>
          </div>
           </div>
           <div className="carousel-box" > 
           <div class="card">
           <img  className="img" src= {Pic}/>
            <h1>Tailored Jeans</h1>
            <p class="price">$19.99</p>
            <p>Some text about the jeans..</p>
            <p><button>Add to Cart</button></p>
          </div>
           </div>
           <div className="carousel-box" > 
           <div class="card">
           <img  className="img" src= {Pic}/>
            <h1>Tailored Jeans</h1>
            <p class="price">$19.99</p>
            <p>Some text about the jeans..</p>
            <p><button>Add to Cart</button></p>
          </div>
           </div>
           <div className="carousel-box" > 
           <div class="card">
           <img  className="img" src= {Pic}/>
            <h1>Tailored Jeans</h1>
            <p class="price">$19.99</p>
            <p>Some text about the jeans..</p>
            <p><button>Add to Cart</button></p>
          </div>
           </div> 
           
      </OwlCarousel> 
  
  
  </div>;
};

export default Carousel;
