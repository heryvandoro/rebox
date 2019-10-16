import { reducerGenerators } from '../utils/reducer-generator';

export abstract class Reducer<T> {
	public readonly initialState: T;

	constructor(state: T) {
		this.initialState = state;
	}

	public build(): any {
		return reducerGenerators(this.initialState, this.actions);
	}

	public abstract get actions(): {
		[key: string]: (state: T, payload?: any) => T;
	};

	protected resetState(state: T, payload: Partial<T>): T {
		return {
			...state,
			...payload,
		};
	}
}
