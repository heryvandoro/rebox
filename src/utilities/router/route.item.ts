export type MiddlewareFunction = () => Promise<boolean | string>;

export interface RouteItem {
	path: string;
	children?: Array<RouteItem>;
	component?: string;
	canActivate?: Array<MiddlewareFunction>;
}
