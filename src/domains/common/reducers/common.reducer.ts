import { Reducer } from '@rebox/domains/shared/types/reducer';
import CommonState from '@rebox/domains/common/states/state';
import { SET_LOADING, TOGGLE_SIDEBAR } from '@rebox/domains/common/actions/common.action';

export class CommonReducer extends Reducer<CommonState> {
	constructor() {
		super({
			loading: {},
			isSidebarVisible: false,
		});
	}

	public setLoading(state: CommonState, payload: any): CommonState {
		return {
			...state,
			loading: {
				...state.loading,
				[payload.key]: payload.value,
			},
		};
	}

	public toggleSidebar(state: CommonState): CommonState {
		return {
			...state,
			isSidebarVisible: !state.isSidebarVisible,
		};
	}

	get actions(): {
		[p: string]: (state: CommonState, payload?: any) => CommonState;
	} {
		return {
			[SET_LOADING]: this.setLoading,
			[TOGGLE_SIDEBAR]: this.toggleSidebar,
		};
	}
}
