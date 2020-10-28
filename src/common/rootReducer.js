import { combineReducers } from 'redux';
import { reducer as oidcReducer } from 'redux-oidc';
import signInReducer from '../features/common/signinout/redux/reducer';
import fetchWeatherReducer from '../features/common/weatherForca/redux/reducer';

const reducerMap = {
    signIn: signInReducer,
    oidc: oidcReducer,
    weather: fetchWeatherReducer,
};

export default combineReducers(reducerMap);
