import React, { Component } from 'react';
import './index.scss';

interface ReboxLoaderProps {
	transparent?: boolean;
}

export default class ReboxLoader extends Component<ReboxLoaderProps, any> {
	render() {
		const { transparent } = this.props;
		return (
			<div
				className={`loader ${
					transparent ? 'transparent' : ''
				}`}>
				<span className="logo">
					<img width="60%" src="/images/loader.png" />
				</span>
			</div>
		);
	}
}
