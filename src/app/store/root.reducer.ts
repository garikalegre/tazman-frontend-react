import { combineReducers } from 'redux';
import { authReducer } from '../duck/auth/auth.reducer';

const rootReducer = combineReducers({ auth: authReducer });
export { rootReducer };
