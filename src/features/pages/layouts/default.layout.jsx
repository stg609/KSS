/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Breadcrumb, Divider } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';
import { Helmet } from 'react-helmet';

import { Header } from '../../common/header';
import { Footer } from '../../common/footer';
import { Content } from '../../common/content';
import { SignInOut } from '../../common/signinout';
import { Menu } from '../../common/menu';
import styles from './styles.module.scss';

export const DefaultLayout = withRouter((props) => {
    // 菜单配置
    const routes = {
        '/': '首 页',
        '/courses': '课 程',
    };

    // 根据菜单配置 及 route 信息 生产面包屑 UI
    const { location } = props;
    const pathSnippets = location.pathname.split('/').filter((i) => i);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
        return (
            <Breadcrumb.Item key={url}>
                <Link to={url}>{routes[url]}</Link>
            </Breadcrumb.Item>
        );
    });
    const breadcrumbItems = [
        <Breadcrumb.Item key="home">
            <Link to="/"><HomeOutlined /></Link>
        </Breadcrumb.Item>,
    ].concat(extraBreadcrumbItems);

    // 根据 菜单配置 动态生成 菜单 UI
    const menuItems = (() => {
        const menus = [];
        for (const key in routes) {
            menus.push(<Menu.Item key={key} to={key}>{routes[key]}</Menu.Item>);
        }
        return menus;
    })();

    return <div className={styles.gridContainer} >
        <Helmet>
            {props.header}
        </Helmet>
        <Header >
            <Header.Logo>K.S.S</Header.Logo>
            <Header.Content>
                <Menu>
                    {menuItems}
                </Menu>
                <SignInOut />
            </Header.Content>
        </Header>
        <Content>
            {(props.hideBreadcrumb !== false) && <Breadcrumb>{breadcrumbItems}</Breadcrumb>}
            {(props.hideBreadcrumb !== false) && <Divider />}
            {props.children}
        </Content>
        <Footer />
    </div>;
});
