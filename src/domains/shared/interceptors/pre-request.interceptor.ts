import { AxiosRequestConfig } from 'axios';

export function preRequestInterceptor(config: AxiosRequestConfig) {
	const token = localStorage.getItem('auth_token');
	if (token) {
		config.headers = {
			...config.headers,
			Authorization: `Bearer ${token}`,
		};
	}
	return config;
}
