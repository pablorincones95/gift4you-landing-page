import React from 'react';


class Feature extends React.Component {
  render() {
		
  	return (
  		<section id="feature" className="feature">
         <div className="feature-decor">
            <div className="feature-circle1"><img className="feature-circle1-img" src="assets/images/main-banner1.png" alt="regalo" /></div>
         </div>
         <div className="container">
            <div className="row">
               <div className="feature-phone">
                  <img src="assets/images/222.png" className="img-fluid" alt="" />
               </div>
               <div className="offset-lg-4 col-lg-8">
                  <div className="row">
                     <div className="col-sm-12 mrgn-md-top">
                        <h2 className="title">caracteristicas de<span> gift4you</span></h2>
                     </div>
                     <div className="col-12 col-md-6">
                        <ul className="feature-style">
                           <li>
                              <div className="feature-icon">
                                 {/* <img src="assets/images/icon/3.png" alt="icon" /> */}
                                 <i class="fa fa-gift" aria-hidden="true"></i> 
                              </div>
                              <div className="feature-subtitle">
                                 <h3>Variedad de regalos</h3>
                              </div>
                              <div>
                                 <p>tienes una lista de variedad de regalos para diferentes ocaciones. </p>
                              </div>
                           </li>
                           <li>
                              <div className="feature-icon">
                                 <img src="assets/images/icon/5.png" alt="icon" />
                              </div>
                              <div className="feature-subtitle">
                                 <h3>Rastreo en tiempo real</h3>
                              </div>
                              <div>
                                 <p>Mira donde va tu regalo y cuanto falta para que llegue a su destino. </p>
                              </div>
                           </li>
                           <li>
                              <div className="feature-icon">
                                 <img src="assets/images/icon/1.png" alt="icon" />
                              </div>
                              <div className="feature-subtitle">
                                 <h3>Amigable para el usuario</h3>
                              </div>
                              <div>
                                 <p>Fácil de usar, instalar y manipular. </p>
                              </div>
                           </li>
                        </ul>
                     </div>
                     <div className="col-12 col-md-6 sm-m-top">
                        <ul className="feature-style">
                           <li>
                              <div className="feature-icon">
                                 <img src="assets/images/icon/2.png" alt="icon" />
                              </div>
                              <div className="feature-subtitle">
                                 <h3>Actualizaciones Constante</h3>
                              </div>
                              <div>
                                 <p>Estamos en constante trabajo para dar una experiencia satisfactoria. </p>
                              </div>
                           </li>
                           <li>
                              <div className="feature-icon">
                                 <img src="assets/images/icon/4.png" alt="icon" />
                              </div>
                              <div className="feature-subtitle">
                                 <h3>100% Segura</h3>
                              </div>
                              <div>
                                 <p>Nuestra aplicación es 100% segura, libre de virus y estafas. </p>
                              </div>
                           </li>
                           <li>
                              <div className="feature-icon">
                                 <img src="assets/images/icon/6.png" alt="icon" />
                              </div>
                              <div className="feature-subtitle">
                                 <h3>Soporte 24/7</h3>
                              </div>
                              <div>
                                 <p>Recibe soporte y respuestas a tus interrogantes. </p>
                              </div>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
  	);
  }
}


export default Feature;