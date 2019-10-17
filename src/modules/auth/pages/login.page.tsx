import React, { Component } from 'react';
import LoginFormContainer from '@rebox/modules/auth/containers/login-form.container';

class LoginPage extends Component {
	render() {
		return (
			<div className="auth-container">
				<div className="mb-3 logo">
					<img src="https://via.placeholder.com/200x60?text=LOGO" />
				</div>
				<div className="title">
					Login
				</div>
				<LoginFormContainer />
			</div>
		);
	}
}

export default LoginPage;
