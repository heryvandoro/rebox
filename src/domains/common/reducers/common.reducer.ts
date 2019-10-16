import { Reducer } from '@rebox/domains/shared/types/reducer';
import CommonState from '@rebox/domains/common/states/state';
import {
	SET_LOADING,
	SET_WINDOW_WIDTH,
	TOGGLE_SIDEBAR,
} from '@rebox/domains/common/actions/common.action';

export class CommonReducer extends Reducer<CommonState> {
	constructor() {
		super({
			loading: {},
			windowWidth: 0,
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

	public setWindowWidth(state: CommonState, payload: number): CommonState {
		return {
			...state,
			windowWidth: payload,
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
			[SET_WINDOW_WIDTH]: this.setWindowWidth,
			[TOGGLE_SIDEBAR]: this.toggleSidebar,
		};
	}
}
