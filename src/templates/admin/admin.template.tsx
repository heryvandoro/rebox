import React, { Component } from 'react';
import { Layout, Icon, Avatar, Popover } from 'antd';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppState } from '@rebox/store';
import App from '@rebox/app';
import { ADMIN_TEMPLATE_ROUTES } from '@rebox/templates/admin/admin.template.routes';
import { AuthService } from '@rebox/domains/auth/services/auth.service';
import { CommonService } from '@rebox/domains/common/services/common.service';
import { User } from '@rebox/domains/user/models/user';
import ReboxLoader from '@rebox/modules/shared/loader';
import "./admin-template.scss"
import Sidebar from '@rebox/templates/admin/sidebar';

interface AdminTemplateProps extends RouteComponentProps {
	me: User;
}

class AdminTemplate extends Component<AdminTemplateProps, any> {
	private authService: AuthService;
	private commonService: CommonService;

	constructor(props: AdminTemplateProps) {
		super(props);
		this.authService = new AuthService();
		this.commonService = new CommonService();
	}

	componentDidMount(): void {
		const { match } = this.props;
		this.setState({
			selectedTarget: match.path,
		});
	}

	async UNSAFE_componentWillMount(): Promise<void> {
		let user = await this.authService.me();
		if (!user) {
			this.authService.logout();
			return;
		}
	}

	render() {
		const {
			me,
		} = this.props;

		if (!me) {
			return (
				<div
					className="d-flex justify-content-center align-items-center"
					style={{ height: '100vh' }}>
					<ReboxLoader />
				</div>
			);
		}

		return (
			<Layout className="admin-template">
				<Sidebar />
				<Layout.Header className="admin-template-header">
					<div className="logo">
						<Icon type="bars" className="menu-button" onClick={this.commonService.toggleSidebar} />
						<img src="https://via.placeholder.com/160x50?text=LOGO" />
					</div>
					<div className="title">
						Dashboard
					</div>
					<div className="user-control">
						<Popover trigger="click" className="user-control-container" overlayClassName="user-control-popup" placement="bottomRight" content={
							<div>
								<div className="avatar">
									<Avatar />
								</div>
								<div className="name">
									Hery Vandoro
								</div>
								<div className="email">
									vandorohery99@gmail.com
								</div>
								<div className="links">
									<Link to="/profile">Profile</Link>
									<Link to="/logout">Sign Out</Link>
								</div>
							</div>
						}>
							<Avatar /> <span className="name">Hery Vandoro</span> <Icon className="arrow-down" type="caret-down"/>
						</Popover>
					</div>
				</Layout.Header>
				<Layout.Content>
					<App routes={ADMIN_TEMPLATE_ROUTES} />
				</Layout.Content>
			</Layout>
		);
	}
}

const mapStateToProps = (state: AppState) => ({
	me: state.auth.me,
});

export default connect(mapStateToProps)(withRouter(AdminTemplate));
