import { BaseService } from '@rebox/domains/shared/services/base.service';
import { Credential } from '@rebox/domains/auth/models/credential';
import { LOGIN, ME } from '@rebox/domains/auth/actions/auth.action';
import AuthApi from '@rebox/domains/auth/clients/auth.api';
import { User } from '@rebox/domains/user/models/user';

export class AuthService extends BaseService {
	private authApi: AuthApi;

	constructor() {
		super();
		this.authApi = new AuthApi();
	}

	public async me(): Promise<User> {
		this.setLoading(ME, true);
		let user = null;
		try {
			user = await this.authApi.me();
			this.dispatch(ME, user);
		} catch (e) {}
		this.setLoading(ME, false);
		return user;
	}

	public async login(payload: any): Promise<Credential> {
		this.setLoading(LOGIN, true);
		let credential: Credential = null;
		try {
			credential = await this.authApi.login(payload);
			localStorage.setItem('auth_token', credential.access_token);
		} catch (e) {}
		this.setLoading(LOGIN, false);

		return credential;
	}

	public async logout(): Promise<void> {
		await this.authApi.logout();
		localStorage.removeItem('auth_token');
		window.location.href = '/auth/login';
	}
}
