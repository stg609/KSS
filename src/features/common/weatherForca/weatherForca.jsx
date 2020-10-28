/* eslint-disable comma-dangle */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeatherAction } from './redux/fetchWeather';

const WeatherForcaWithoutConnect = ({ isLoading, wea, fetchWeather }) => {
    if (!isLoading && wea == null) {
        fetchWeather();
    }
    return (isLoading ? <span>加载中...</span>
        : <span>{wea}</span>
    );
};

const mapStateToProps = (state) => {
    return {
        isLoading: state.weather.isLoading,
        wea: state.weather.wea
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchWeather: bindActionCreators(fetchWeatherAction, dispatch)
    };
};

export const WeatherForca = connect(mapStateToProps, mapDispatchToProps)(WeatherForcaWithoutConnect);
