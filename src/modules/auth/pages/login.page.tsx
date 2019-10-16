import React, { Component } from 'react';
import LoginFormContainer from '@rebox/modules/auth/containers/login-form.container';

class LoginPage extends Component {
	render() {
		return (
			<div className="auth-container">
				<LoginFormContainer />
			</div>
		);
	}
}

export default LoginPage;
