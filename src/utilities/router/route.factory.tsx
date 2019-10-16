import React from 'react';
import { Route } from 'react-router-dom';
import { RouteItem } from '@rebox/utilities/router/route.item';
import AsyncPage from '@rebox/modules/shared/async-page';

let parsedRoutes: any = [];

function mapRoute(routes: Array<RouteItem>, parent: RouteItem = null) {
	routes.map((route) => {
		route = { ...route };
		if (!route.children || route.children.length === 0) {
			if (!route.path.startsWith('/')) {
				route.path = `/${route.path}`;
			}
			if (parent) {
				route.path = parent.path + route.path;

				if (parent.canActivate && parent.canActivate.length) {
					route.canActivate = [
						...parent.canActivate,
						...(route.canActivate || []),
					];
				}
			}
			parsedRoutes.push(route);
		} else {
			mapRoute(route.children, route);
		}
	});
}

export function routeFactory(routes: Array<RouteItem>) {
	parsedRoutes = [];
	mapRoute(routes);

	return parsedRoutes.map((route: RouteItem, index: number) => {
		return (
			<Route
				key={index}
				exact
				component={AsyncPage(
					() => import('@rebox/' + route.component),
					route.canActivate,
				)}
				path={route.path}
			/>
		);
	});
}
