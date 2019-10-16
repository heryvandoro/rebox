import { User } from '@rebox/domains/user/models/user';

export interface AuthState {
	me: User;
}
