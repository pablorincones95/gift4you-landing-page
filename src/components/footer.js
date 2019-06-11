import React from 'react';


class Footer extends React.Component {
  
  componentWillMount() {
        (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js#xfbml=1&version=v2.12&autoLogAppEvents=1';
        fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

  render() {
		
  	return (
      <div>
    		<section className="p-0">
           <div className="container-fluid">
           <div className="bottom-section">
              <div className="row">
                 <div className="col-md-6 p-0">
                    <div className="address-bar">
                       <div>
                          <ul className="footer-style">
                              <li>
                                 <div className="footer-icon">
                                    <i class="fa fa-facebook-square" aria-hidden="true"></i>
                                 </div>
                                 <div className="footer-address">
                                    <a href="https://www.facebook.com/ExpresaSinPalabras/" target="_blank" rel="noopener noreferrer">Facebook</a>
                                 </div>
                              </li>

                              <li>
                                 <div className="footer-icon">
                                    <i className="fa fa-instagram"></i>
                                 </div>
                                 <div className="footer-address">
                                    <a href="https://www.instagram.com/gift4you_._/" target="_blank" rel="noopener noreferrer">Instagram</a>
                                 </div>
                              </li>
                           
                             <li>
                                <div className="footer-icon">
                                   <img src="assets/images/telephone.png" alt="telephone" />
                                </div>
                                <div className="footer-address">
                                    <a href={null}>3185171481  /  3007082907</a>
                                </div>
                             </li>
                             <li>
                                <div className="footer-icon">
                                   <img src="assets/images/fotter-email.png" alt="fotter-email" />
                                </div>
                                <div className="footer-address">
                                    <a href={null}>Contacto@g4you.co</a>
                                </div>
                             </li>
            
                          </ul>
                       </div>
                    </div>
                 </div>
                 <div className="col-md-6 p-0 flex-center">
                 <h2 className="title text-center">zona de cobertura<span> Bogotá</span></h2>
                 </div>
              </div>
           </div>
           </div>
        </section>

        <div className="copyright-section index-footer">
           <p> 2019 Todo los Derechos Reservados Gift4you. Desarrollado por  <a href="https://geniusweb.mx/">GeniusWeb</a></p>
        </div>

        <div className="tap-top">
           <div>
              <i className="fa fa-angle-double-up"></i>
           </div>
        </div>
        <div id="fb-root"></div>
        {/*Your customer chat code*/}
          <div className="fb-customerchat"
              page_id="2123438804574660"
              theme_color="#18e7d3"
              logged_in_greeting="Hi! Welcome to PixelStrap Themes  How can we help you?"
              logged_out_greeting="Hi! Welcome to PixelStrap Themes  How can we help you?">
          </div>
      </div>
  	);
  }
}


export default Footer;