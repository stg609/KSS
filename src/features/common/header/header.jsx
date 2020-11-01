import React from 'react';
import styles from './styles.module.scss';


export const Header = ({ children }) => (
    <header className={styles.header}>
        {children}
    </header>
);


Header.Logo = ({ children }) => (
    <div className={styles.logo} >
        {children}
    </div>);

Header.Content = ({ children }) => (
    <div className={styles.content} >
        {children}
    </div>);