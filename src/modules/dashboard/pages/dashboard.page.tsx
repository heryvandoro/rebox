import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';

export default class DashboardPage extends Component {
	render() {
		return (
			<div className="admin-template-content">
			<Row>
				<Col span={24}>
					<Card>
						Dashboard Page
					</Card>
				</Col>
			</Row>
			</div>
		);
	}
}
