import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';
import { AppStore } from '@rebox/store';
import AuthTemplate from '@rebox/templates/auth/auth.template';
import AdminTemplate from '@rebox/templates/admin/admin.template';
import '@rebox/styles/app.scss';
import history from '@rebox/route-history';

ReactDOM.render(
	<Provider store={AppStore}>
		<Router history={history}>
			<Switch>
				<Route path="/auth" component={AuthTemplate} />
				<Route path="/" component={AdminTemplate} />
			</Switch>
		</Router>
	</Provider>,
	document.getElementById('root'),
);
