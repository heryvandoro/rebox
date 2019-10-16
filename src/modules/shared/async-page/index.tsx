import React, { Component } from 'react';
import Nprogress from 'nprogress';
import ReboxLoader from '@rebox/modules/shared/loader';
import { MiddlewareFunction } from '@rebox/utilities/router/route.item';

export default function AsyncPage(
	pageComponent: any,
	middlewares: Array<MiddlewareFunction> = [],
) {
	class AsyncPageComponent extends Component<any, any> {
		private mounted: boolean;
		constructor(props: any) {
			super(props);
			this.state = {
				component: null,
			};
		}

		componentWillMount() {
			Nprogress.start();
		}

		componentWillUnmount() {
			this.mounted = false;
		}

		async componentDidMount() {
			this.mounted = true;
			const { default: Component } = await pageComponent();
			Nprogress.done();

			let middlewareResults = await Promise.all(
				middlewares.map(
					async (middleware: any) =>
						new Promise(async (resolve) => {
							resolve(await middleware());
						}),
				),
			);
			let fallback = middlewareResults.find((_) => _ !== true);

			if (fallback) {
				window.location.href = fallback.toString();
			}

			if (this.mounted) {
				setTimeout(() => {
					this.setState({
						component: <Component {...this.props} />,
					});
				}, 500);
			}
		}

		render() {
			return (
				this.state.component || (
					<div
						className="d-flex justify-content-center align-items-center"
						style={{ minWidth: '100%', minHeight: '80vh' }}>
						<ReboxLoader />
					</div>
				)
			);
		}
	}

	return AsyncPageComponent;
}
