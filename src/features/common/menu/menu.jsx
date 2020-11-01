import React from 'react';
import styles from './styles.module.scss';
import {
    NavLink
  } from "react-router-dom";

export const Menu = ({ children }) => (
    <section className={styles.menu}>
        {children}
    </section>
);

Menu.Item = (props) => {
    return (<NavLink className={styles.menuItem} activeClassName={styles.active} to={props.to} exact>
        {props.children}
    </NavLink>);
}
