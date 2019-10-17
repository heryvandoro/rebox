import { applyMiddleware, combineReducers, createStore, Middleware, ReducersMapObject, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { AuthState } from '@rebox/domains/auth/states/state';
import { AuthReducer } from '@rebox/domains/auth/reducers/auth.reducer';
import CommonState from '@rebox/domains/common/states/state';
import { CommonReducer } from '@rebox/domains/common/reducers/common.reducer';
import { TodoState } from '@rebox/domains/todo/states/state';
import { TodoReducer } from '@rebox/domains/todo/reducers/todo.reducer';

export interface AppState {
	auth: AuthState;
	common: CommonState;
	todo: TodoState;
}

export const logger: Middleware = () => (next) => (action) => {
	if (process.env.NODE_ENV !== 'production') {
		console.log(action);
	}
	return next(action);
};

function configureStore(): Store<any> {
	let middleware = applyMiddleware(logger);

	if (process.env.NODE_ENV !== 'production') {
		middleware = composeWithDevTools(middleware);
	}

	let rootReducer: ReducersMapObject<AppState, any> = {
		auth: new AuthReducer().build(),
		common: new CommonReducer().build(),
		todo: new TodoReducer().build()
	};

	return createStore(
		combineReducers<AppState>(rootReducer),
		middleware,
	) as Store<AppState>;
}

export const AppStore = configureStore();
