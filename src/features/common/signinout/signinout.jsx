import React from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { signInAction } from './redux/signIn';
import { signOutAction } from './redux/signOut';
import styles from './styles.module.scss';

const SignInPageWithoutConnect = (props) => {
    const { isSignInBegin, isSignOutBegin, currentUser, signInAsync, signOutAsync } = props;
    if (isSignInBegin) {
        return (<p>即将跳转到登陆页面，请稍后...</p>);
    }

    if (isSignOutBegin) {
        return (<p>即将跳转到登出页面，请稍后...</p>);
    }

    if (currentUser) {
        return (<span className={styles.signInOut}>
            <strong>Welcome, {currentUser.profile.name}! </strong>
            <Button onClick={() => signOutAsync()}>登 出</Button>
        </span>);
    }

    return (<span className={styles.signInOut}>
        <Button onClick={() => signInAsync()}>登 录</Button>
    </span>);
};

const mapStateToProps = (state) => ({
    currentUser: state.oidc.user,
    isSignInBegin: state.signIn.isSignInBegin,
    isSignOutBegin: state.signIn.isSignOutBegin,
});

const mapDispatchToProps = (dispatch) => ({
    signInAsync: bindActionCreators(signInAction, dispatch),
    signOutAsync: bindActionCreators(signOutAction, dispatch),
});

export const SignInOut = connect(mapStateToProps, mapDispatchToProps)(SignInPageWithoutConnect);
