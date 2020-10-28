import { WEATHER_BEGIN_EVENT, WEATHER_SUCCESS_EVENT } from './actionTypes';

// async action Creators
export const fetchWeatherAction = () => (dispatch) => {
    dispatch({ type: WEATHER_BEGIN_EVENT });

    fetch('https://api.seniverse.com/v3/weather/now.json?key=SWhLxArlwzR3y_vcz&location=beijing&language=zh-Hans&unit=c')
        .then((response) => response.json())
        .then((response) => {
            dispatch({
                type: WEATHER_SUCCESS_EVENT,
                payload: response.results[0].now.temperature,
            });
        });
};

// reducer
export const reducer = (state, action) => {
    switch (action.type) {
    case WEATHER_BEGIN_EVENT:
        return {
            ...state,
            isLoading: true,
            wea: null,
        };
    case WEATHER_SUCCESS_EVENT:
        return {
            ...state,
            isLoading: false,
            wea: action.payload,
        };
    default:
        return state;
    }
};
