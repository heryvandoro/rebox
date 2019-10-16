import { RouteItem } from '@rebox/utilities/router/route.item';
import { GuestGuard } from '@rebox/domains/auth/guards/guest.guard';

export const AUTH_ROUTES: Array<RouteItem> = [
	{
		path: '/auth/login',
		component: 'modules/auth/pages/login.page',
		canActivate: [GuestGuard],
	},
];
