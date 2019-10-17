import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, Method } from 'axios';
import { AppConfig } from '@rebox/configs/app';
import { preRequestInterceptor } from '@rebox/domains/shared/interceptors/pre-request.interceptor';
import { errorInterceptor } from '@rebox/domains/shared/interceptors/error.interceptor';

export class BaseApi {
	private baseUrl: string;
	private axiosInstance: AxiosInstance;

	constructor() {
		this.baseUrl = AppConfig.API_URL;
		this.axiosInstance = axios.create();

		this.axiosInstance.interceptors.request.use(
			preRequestInterceptor,
			(err) => Promise.reject(err),
		);

		this.axiosInstance.interceptors.response.use(
			(response) => response,
			errorInterceptor,
		);
	}

	make(
		method: Method,
		url: string,
		data: any = {},
		addtionalConfig: Partial<AxiosRequestConfig> = {},
	): Promise<AxiosResponse<any>> {
		const config: AxiosRequestConfig = {
			baseURL: this.baseUrl,
			method: <Method>method,
			url,
			headers: {
				'Content-Type': 'application/json',
			},
			...addtionalConfig,
		};

		if (method === 'GET') {
			Object.keys(data).forEach((key) => {
				if (data[key] === null || data[key] === '') {
					delete data[key];
				}
			});
			config.params = data;
		} else {
			config.data = data;
		}

		return this.axiosInstance.request(config);
	}
}
