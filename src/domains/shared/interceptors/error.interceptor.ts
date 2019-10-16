import { notification } from 'antd';
import { AxiosError, AxiosResponse } from 'axios';

function showNotificationError(response: AxiosResponse) {
	notification.error({
		message: response.data ? response.data.code : 'Error',
		description: response.data ? response.data.message : 'Something Wrong',
	});
}

export const errorInterceptor = (err: AxiosError) => {
	const { response } = err;
	if (response) {
		if (
			response.data &&
			response.data.message &&
			response.data.message.message
		) {
			response.data.message = response.data.message.message;
		}

		if (response.status === 401) {
			if (!window.location.href.includes('/auth')) {
				window.setTimeout(() => {
					window.location.href = '/auth/login';
				}, 1500);
			} else if (!response.config.url.includes('/auth/me')) {
				showNotificationError(response);
			}
		} else {
			showNotificationError(response);
		}
	}
	return Promise.reject(err);
};
