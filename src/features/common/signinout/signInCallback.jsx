import React from 'react';
import { connect } from 'react-redux';
import { CallbackComponent } from 'redux-oidc';
import { userManager } from '../../../utils/userManager';

const CallbackPageWithoutConnect = ({ history }) => (
    <CallbackComponent
        userManager={userManager}
        successCallback={() => {
            history.push('/');
        }}
        errorCallback={(error) => {
            console.error(error);
            history.push('/');
        }}
    >
        <div>Redirecting...</div>
    </CallbackComponent>);

export const SignInCallback = connect()(CallbackPageWithoutConnect);
