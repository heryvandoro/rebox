import React, { Component } from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { Drawer, Menu } from 'antd';
import { connect } from 'react-redux';
import { AppState } from '@rebox/store';
import { AuthService } from '@rebox/domains/auth/services/auth.service';
import { User } from '@rebox/domains/user/models/user';
import { CommonService } from '@rebox/domains/common/services/common.service';
import "./sidebar.scss"

interface SidebarProps extends RouteComponentProps {
	me: User;
	isSidebarVisible: boolean;
}

class Sidebar extends Component<SidebarProps, any> {
	private authService: AuthService;
	private commonService: CommonService;

	constructor(props: SidebarProps) {
		super(props);
		this.authService = new AuthService();
		this.commonService = new CommonService();
	}

	private onLogout = () => {
		this.authService.logout();
	};

	render() {
		const { isSidebarVisible } = this.props;

		return (
			<Drawer className="sidebar" closable={false} placement="left" visible={isSidebarVisible} onClose={this.commonService.toggleSidebar}>
				<Menu>
					<Menu.Item>
						<Link to="/">Home</Link>
					</Menu.Item>
				</Menu>
			</Drawer>
		);
	}
}

const mapStateToProps = (state: AppState) => ({
	isSidebarVisible: state.common.isSidebarVisible,
	me: state.auth.me,
});

export default withRouter(connect(mapStateToProps)(Sidebar));
