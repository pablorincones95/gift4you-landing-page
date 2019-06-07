import React from 'react';
import OwlCarousel from 'react-owl-carousel';


class ScreenShot extends React.Component {
  render() {
  	
  		// OwlCarousel Option for Screenshot
  		const options = {
		    0:{
                items:2,
            },
            767:{
                items:2,
            },
            768:{
                items:3,
            },
            992:{
                items:4,
            },
            1200:{
                items:5
            }
		};

  	return (
  		<section id="screenshot" className="screenshot padding-top-bottom">
		   <div className="screenshot-decor">
		      <div className="screenshot-circle1"><img className="feature-circle2-img" src="assets/images/regalo1.png" alt="regalo" /></div>
		      <div className="screenshot-circle2"><img className="feature-circle1-img" src="assets/images/regalo-fucsia.png" alt="regalo-fucsia" /></div>
		      <div className="screenshot-circle3"><img className="main-banner-img" src="assets/images/tres-regalos2.png" alt="tres regalos" /></div>
		   </div>
		   <div className="container">
		      <div className="row">
		         <div className="col-sm-12 ">
		            <div className="screenshot-contain">
		               <img className="mobile-light-left" src="assets/images/light.png" alt="light" />
		               <img className="mob-mocup img-fluid" src="assets/images/screenshot-mob.png" alt="screenshot-mob" />
		               <img className="mobile-light-right" src="assets/images/light-right.png" alt="light-right" />
		               <OwlCarousel
						    className="screenshot-carousel owl-carousel owl-theme"
						    loop={true}
						    margin={30}
						    items={3}
						    center={true}
						    dots={false}
						    autoplay={true}
						    autoplayTimeout={8000}
						    responsive={options}
						>
		                  <div className="screenshot-item"><img src="assets/images/app/2.jpg" alt="app" /></div>
		                  <div className="screenshot-item"><img src="assets/images/app/3.jpg" alt="app" /></div>
		                  <div className="screenshot-item"><img src="assets/images/app/1.jpg" alt="app" /></div>
		               </OwlCarousel>
		            </div>
		         </div>
		      </div>
		   </div>
		</section>
  	);
  }
}


export default ScreenShot;