import React from 'react';
import OwlCarousel from 'react-owl-carousel';


class Price extends React.Component {
  render() {
    // OwlCarousel Option for Prices
    const options = {
        0:{
            items:1,
            dots:true,
            margin:5,
        },
        600:{
            items:1,
            dots:true,
            margin:0,
        },
        768:{
            items:2,
            dots:true,
        },
        992:{
            items:3,
        },
        1000:{
            items:3
        }
    };

    // Dynamic Price Data Easy to Update
    let data = [
        {title: 'Beneficios', lable:'Sólo las características básicas.', price:'969', features:'<li>(+) Aumento de pedidos.</li><li>Seguimiento en tiempo real.</li><li>(+) Aumento de ingresos.</li><li>(+) Visualización.</li><li>(+) Aumento de ingresos.</li><li>Fidelizacón de clientes.</li><li>Generación de empleo.</li>', link:'#'},
    ];

    // Dynamic Price Data Loop
    let DataList = data.map((val, i) => {
        return (
          <div className="price-item" key={i}>
            <div className="price-block">
               <div className="price-type">
                  <h2>{val.title}</h2>
               </div>
               <div className="mrp">
                  <h6 className="user-type">{val.lable}</h6>
                  <div className="price-devide"></div>
                  <h2>${val.price}</h2>
                  <h6 className="price-year">per year</h6>
                  <div className="price-devide"></div>
               </div>
               <ul className="price-feature" dangerouslySetInnerHTML={ {__html: val.features} }></ul>
               <a href={val.link} className="btn btn-custom theme-color" role="button" >Seleccione el plan</a>
            </div>
         </div>
        );
    });
		
  	return (
  		<section id="price" className="price">
           <div className="container">
              <div className="row">
                 <div className="col-sm-12 flex-center">
                    <OwlCarousel
                        className="price-carousel owl-carousel owl-theme flex-center"
                        loop={false}
                        margin={30}
                        nav={false}
                        dots={false}
                        responsive={options}
                    >
                       {DataList}
                    </OwlCarousel>
                 </div>
              </div>
           </div>
        </section>
  	);
  }
}


export default Price;