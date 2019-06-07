import React from 'react';


class SignIn extends React.Component {
  render() {
		
  	return (
  		<section className="authentication-form">
         <div className="innerpage-decor">
            <div className="innerpage-circle1"><img className="testimonial2" src="assets/images/regalo-fucsia.png" alt="regalo fucisa" /></div>
            <div className="innerpage-circle2"><img className="testimonial1" src="assets/images/regalo1.png" alt="regalo" /></div>
         </div>
         <div>
            <h2 className="title text-center"><span> iniciar sesión</span></h2>
            <p className="text-center">Bienvenido a gift4you, Por favor, inicie sesión con la información de su cuenta personal.</p>
            <div className="card">
               <form className="theme-form">
                  <div className="form-group">
                     <input type="email" className="form-control" placeholder="Correo" required="required" />
                  </div>
                  <div className="form-group">
                     <input required="" name="login[password]" type="password" className="form-control" placeholder="Contraseña" />
                     <div className="show-hide">
                        <span className="show"></span>
                     </div>
                  </div>
                  <div className="form-group row">
                     <div className="custom-control custom-checkbox col-6">
                        <input type="checkbox" className="custom-control-input" id="customControlAutosizing" />
                        <label className="custom-control-label" htmlFor="customControlAutosizing">Recuerdame</label>
                     </div>
                     <a href={`${process.env.PUBLIC_URL}/forget-password`} className="text-right col-6 theme-link">Perdiste tu contraseña</a>
                  </div>
                  <div className="form-button text-center">
                     <button type="submit" className="btn btn-custom btn-lg theme-color">Inicar sesión</button>
                  </div>
               </form>
            </div>
         </div>
      </section>
  	);
  }
}


export default SignIn;