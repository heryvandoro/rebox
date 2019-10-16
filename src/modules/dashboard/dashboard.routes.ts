import { RouteItem } from '@rebox/utilities/router/route.item';
import { AuthenticatedGuard } from '@rebox/domains/auth/guards/authenticated.guard';

export const DASHBOARD_ROUTES: Array<RouteItem> = [
	{
		path: '/',
		component: 'modules/dashboard/pages/dashboard.page',
		canActivate: [AuthenticatedGuard],
	},
];
