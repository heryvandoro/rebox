import React, { Component } from 'react';
import LoginForm from '@rebox/modules/auth/components/login.form';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { WrappedFormUtils } from 'antd/es/form/Form';
import { connect } from 'react-redux';
import { AppState } from '@rebox/store';
import { LOGIN } from '@rebox/domains/auth/actions/auth.action';
import { AuthService } from '@rebox/domains/auth/services/auth.service';

interface LoginFormContainerProps extends RouteComponentProps {
	isLoading: boolean;
}

class LoginFormContainer extends Component<LoginFormContainerProps> {
	private authService: AuthService;
	constructor(props: LoginFormContainerProps) {
		super(props);
		this.authService = new AuthService();
	}
	private onSubmit = (e: Event, form: WrappedFormUtils) => {
		e.preventDefault();

		form.validateFieldsAndScroll(async (err, values) => {
			if (err) return;

			let credentials = await this.authService.login(values);
			if (credentials) {
				const { history } = this.props;
				history.push('/');
			}
		});
	};
	render() {
		const { isLoading } = this.props;
		return (
			<div>
				<LoginForm
					isLoading={isLoading}
					onSubmit={this.onSubmit}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state: AppState) => ({
	isLoading: state.common.loading[LOGIN],
});

export default connect(mapStateToProps)(withRouter(LoginFormContainer));
