import React from 'react';
import styles from './styles.module.scss';
import { BackTop } from 'antd';

export const BackTopWithStyle = () => (
    <BackTop>
        <div className={styles.backTop}>UP</div>
    </BackTop>
)
