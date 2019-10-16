import React, { Component } from 'react';
import App from '@rebox/app';
import { AUTH_TEMPLATE_ROUTES } from '@rebox/templates/auth/auth.template.routes';
import './auth.template.scss';

export default class AuthTemplate extends Component<any, any> {
	constructor(props: any) {
		super(props);
	}
	render() {
		return (
			<div className="auth-template">
				<div className="background" />
				<App routes={AUTH_TEMPLATE_ROUTES} />
			</div>
		);
	}
}
