import { BaseApi } from '../../shared/clients/base.api';
import { mapToClass } from '../../shared/transformers/data.transformer';
import { Credential } from '@rebox/domains/auth/models/credential';
import { User } from '@rebox/domains/user/models/user';

export default class AuthApi extends BaseApi {
	public async login(payload: any = {}): Promise<Credential> {
		//TODO: Remove this
		return {
			access_token: 'DUMMY_TOKEN',
			expired_in: -1
		}
		return this.make('POST', `auth/login`, payload).then((response) =>
			mapToClass(Credential, response),
		);
	}

	public async logout(): Promise<void> {
		this.make('POST', `auth/logout`);
	}

	public async me(): Promise<User> {
		//TODO: Remove this
		if (localStorage.getItem("auth_token")) {
			return new User();
		}
		return this.make('GET', `auth/me`).then((response) =>
			mapToClass(User, response),
		);
	}
}
