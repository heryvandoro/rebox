import { RouteItem } from '@rebox/utilities/router/route.item';
import { AuthenticatedGuard } from '@rebox/domains/auth/guards/authenticated.guard';

export const TODO_ROUTES: Array<RouteItem> = [
	{
		path: '/todos',
		canActivate: [AuthenticatedGuard],
		component: "modules/todo/pages/todo-grid.page"
	}
];