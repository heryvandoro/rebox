import { Store } from 'redux';
import { AppStore } from '@rebox/store';
import { SET_LOADING } from '@rebox/domains/common/actions/common.action';

export class BaseService {
	private store: Store;

	constructor() {
		this.store = AppStore;
	}

	protected setLoading(action: string, loading: boolean): void {
		this.dispatch(SET_LOADING, {
			key: action,
			value: loading,
		});
	}

	protected getState(): Readonly<Store> {
		return this.store.getState();
	}

	protected dispatch(type: string, payload: any = null): void {
		this.store.dispatch({ type, payload });
	}
}
