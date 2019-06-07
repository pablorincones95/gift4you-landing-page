import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import NoMatch from './pages/404';
import App from './home';
import SignIn from './pages/sign-in';
import ForgetPassword from './pages/forget-pwd';
import PageNotFound from './pages/404';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class Root extends React.Component {
  render() {
  	return(
  		<BrowserRouter basename={'/'} >
		  	<Switch>
			  <Route exact path={`${process.env.PUBLIC_URL}/`} component={App}/>
			  <Route path={`${process.env.PUBLIC_URL}/iniciar-sesion`} component={SignIn}/>
				<Route path={`${process.env.PUBLIC_URL}/recuperar-contraseña`} component={ForgetPassword}/>
			  <Route path={`${process.env.PUBLIC_URL}/404`} component={PageNotFound}/>
			  <Route component={NoMatch} />
			</Switch>
		</BrowserRouter>
  	);
  }
 }

ReactDOM.render(<Root />, document.getElementById('root'));

registerServiceWorker();
