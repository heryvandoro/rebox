import {
	History,
	Location,
	LocationListener,
	UnregisterCallback,
} from 'history';
import {
	generateQueryString,
	parseQueryString,
} from '@rebox/utilities/formatter/query-string';
import history from '@rebox/route-history';

export default class Navigator {
	private unregisterCallback: UnregisterCallback;
	private clonedHistory: History<any>;

	constructor() {
		this.clonedHistory = {
			...history,
		};
	}

	public bindListener(callback: LocationListener<any>) {
		this.unregisterCallback = history.listen(callback);
	}

	public unbindListener() {
		if (this.unregisterCallback) {
			this.unregisterCallback();
		}
	}

	public updateQueryParams = (
		newQuery: { [key: string]: string | number } = {},
		strict?: boolean,
	) => {
		const query = strict ? {} : parseQueryString(history.location.search);
		history.push({
			pathname: history.location.pathname,
			search: generateQueryString({
				...query,
				...newQuery,
			}),
		});
	};

	public redirect(
		newPath: string,
		query?: { [key: string]: string | number },
	): void {
		history.push({
			pathname: newPath,
			search: generateQueryString(query || {}),
		});
	}

	public getCurrentQueryParams = () => {
		return parseQueryString(history.location.search);
	};

	public isInSamePage(newLocation: Location<any>): boolean {
		return this.clonedHistory.location.pathname === newLocation.pathname;
	}
}
