import React from 'react';
import styles from './styles.module.scss';

export const Content = ({ children }) => (
    <section className={styles.content}>
        {children}
    </section>
)
