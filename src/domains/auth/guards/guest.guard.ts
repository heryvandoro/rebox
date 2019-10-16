import { AuthService } from '@rebox/domains/auth/services/auth.service';

export async function GuestGuard(): Promise<boolean | string> {
	const service = new AuthService();
	const user = await service.me();
	if (user) {
		return '/';
	}
	return true;
}
