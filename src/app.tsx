import { Route, Switch } from 'react-router-dom';
import * as React from 'react';
import { memo } from 'react';
import { routeFactory } from '@rebox/utilities/router/route.factory';
import { hot } from 'react-hot-loader/root';
import AsyncPage from '@rebox/modules/shared/async-page';
import { RouteItem } from '@rebox/utilities/router/route.item';

interface AppProps {
	routes: Array<RouteItem>;
}

function App(props: AppProps) {
	return (
		<Switch>
			{routeFactory(props.routes)}
			<Route
				component={AsyncPage(
					() => import('@rebox/modules/error/pages/404'),
					[],
				)}
			/>
		</Switch>
	);
}

export default memo(hot(App), () => true);
