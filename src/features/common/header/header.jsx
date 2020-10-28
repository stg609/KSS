import React from 'react';
import { SignInOut } from '../signinout';
import { WeatherForca } from '../weatherForca';
import styles from './styles.module.scss';

export const Header = () => (
    <header className={styles.header}>
        <div><WeatherForca /><SignInOut /></div>
    </header>
);
