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
				className={`diamond-loader ${
					transparent ? 'transparent' : ''
				}`}>
				<span>
					<svg
						version="1.1"
						id="Capa_1"
						xmlns="http://www.w3.org/2000/svg"
						x="0px"
						y="0px"
						width="60"
						height="25"
						viewBox="0 0 58 58">
						<polygon
							style={{ fill: '#CC2E48' }}
							points="29,55 0,19 58,19 "
						/>
						<polygon
							style={{ fill: '#FC3952' }}
							points="58,19 0,19 10,3 48,3 "
						/>
						<polygon
							style={{ fill: '#F76363' }}
							points="42.154,19 48,3 10,3 15.846,19 "
						/>
						<polygon
							style={{ fill: '#F49A9A' }}
							points="42,19 29,3 16,19 "
						/>
						<polygon
							style={{ fill: '#CB465F' }}
							points="15.846,19 29,55 42.154,19 "
						/>
						<g />
						<g />
						<g />
						<g />
						<g />
						<g />
						<g />
						<g />
						<g />
						<g />
						<g />
						<g />
						<g />
						<g />
						<g />
					</svg>
				</span>
			</div>
		);
	}
}
