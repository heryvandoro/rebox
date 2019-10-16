import { AuthState } from '@rebox/domains/auth/states/state';
import { Reducer } from '@rebox/domains/shared/types/reducer';
import { User } from '@rebox/domains/user/models/user';
import { ME } from '@rebox/domains/auth/actions/auth.action';

export class AuthReducer extends Reducer<AuthState> {
	constructor() {
		super({
			me: null,
		});
	}

	public setMe(state: AuthState, payload: User): AuthState {
		return {
			...state,
			me: payload,
		};
	}

	get actions(): {
		[p: string]: (state: AuthState, payload?: any) => AuthState;
	} {
		return {
			[ME]: this.setMe,
		};
	}
}
