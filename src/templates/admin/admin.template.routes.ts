import { DASHBOARD_ROUTES } from '@rebox/modules/dashboard/dashboard.routes';
import { TODO_ROUTES } from '@rebox/modules/todo/todo.routes';

export const ADMIN_TEMPLATE_ROUTES = [
	...DASHBOARD_ROUTES,
	...TODO_ROUTES
];
