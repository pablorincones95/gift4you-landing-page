import React from 'react';

class Team extends React.Component {
  render() {
   	
  	return (
  		<section id="team" className="team">
           <div className="team-decor">
              <div className="team-circle1"><img className="team1-img" src="assets/images/osito.png" alt="osito" /></div>
              <div className="team-circle2"><img className="feature-circle1-img" src="assets/images/regalo-fucsia.png" alt="regalo fucsia" /></div>
              <div className="team-circle3"><img className="team3-img" src="assets/images/main-banner1.png" alt="" /></div>
           </div>
           <div className="container">
              <div className="row ">
                 <div className="col-sm-12">
                    <h2 className="title">Video <span>Explicativo</span></h2>
                 </div>
                 <div className="col-sm-12">
                    <div className="flex-center">
                    <iframe title={'video explicativo'} src="https://player.vimeo.com/video/139906848" width="640" height="356" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                    </div>
                 </div>
              </div>
           </div>
        </section>
  	);
  }
}


export default Team;