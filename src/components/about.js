import React from 'react';


class About extends React.Component {
  render() {
		
  	return (
  		<section id="about" className="about">
         <div className="about-decor">
            <div className="about-circle1"><img className="team1-img" src="assets/images/main-banner1.png" alt="regalo 1" /></div>
            <div className="about-circle2"><img className="main-banner-img" src="assets/images/osito.png" alt="osito" /></div>
         </div>
         <div className="container">
            <div className="row ">
               <div className="col-md-5">
                  <div className="about-contain">
                     <div>
                        <h2 className="title">acerca de <span>gift4you</span></h2>
                        <p className="caption-about">Somos una aplicación enfocada en llegar con regalos a la presencia de gente importante y darle solución a cada una de tus incógnitas; desde la palma de tu mano puedes hacer de ese día un momento muy singular quedando en la memoria de todos.</p>
                        <div className="row sm-mb">
                           <div className="col-6">
                              <ul className="about-style">
                                 <li className="abt-hover">
                                    <div className="about-icon">
                                       <div className="icon-hover">
                                       <i class="fa fa-bar-chart" aria-hidden="true"></i>

                                       </div>
                                    </div>
                                    <div className="about-text">
                                       <h3>Constancia</h3>
                                    </div>
                                 </li>
                                 <li className="abt-hover">
                                    <div className="about-icon">
                                       <div className="icon-hover">
                                       <i class="fa fa-star-o" aria-hidden="true"></i>
                                       </div>
                                    </div>
                                    <div className="about-text">
                                      <h3>Exelencia</h3>
                                    </div>
                                 </li>
                              </ul>
                           </div>
                           <div className="col-6">
                              <ul className="about-style">
                                 <li className="abt-hover">
                                    <div className="about-icon">
                                       <div className="icon-hover">
                                       <i class="fa fa-circle-thin" aria-hidden="true"></i>
                                       </div>
                                    </div>
                                    <div className="about-text">
                                      <h3>Transparencia</h3>
                                    </div>
                                 </li>
                                 <li className="abt-hover">
                                    <div className="about-icon">
                                       <div className="icon-hover">
                                       <i class="fa fa-handshake-o" aria-hidden="true"></i>
                                       </div>
                                    </div>
                                    <div className="about-text">
                                       <h3>Respeto</h3>
                                    </div>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-md-7 d-medium-none">
                  <div className="about-right">
                     <div className="about-phone">
                        <img  src="assets/images/aboutus.png" className="img-fluid" alt="aboutus" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
  	);
  }
}


export default About;