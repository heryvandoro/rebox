import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppStore } from '@rebox/store';
import AuthTemplate from '@rebox/templates/auth/auth.template';
import AdminTemplate from '@rebox/templates/admin/admin.template';
import "@rebox/styles/app.scss"

ReactDOM.render(
	<Provider store={AppStore}>
		<BrowserRouter basename="/">
			<Switch>
				<Route path="/auth" component={AuthTemplate} />
				<Route path="/" component={AdminTemplate} />
			</Switch>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root'),
);
