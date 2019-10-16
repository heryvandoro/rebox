export type MiddlewareFunction = () => Promise<boolean | string>;

export interface RouteItem {
	path: string;
	children?: Array<RouteItem>;
	template?: any;
	component?: string;
	canActivate?: Array<MiddlewareFunction>;
}
