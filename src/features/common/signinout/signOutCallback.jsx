import React from 'react';
import { connect } from "react-redux";
import { SignoutCallbackComponent } from "redux-oidc";
import { userManager } from '../../../utils/userManager';

const CallbackPageWithoutConnect = ({ history }) => {
    return (
        <SignoutCallbackComponent
            userManager={userManager}
            successCallback={() => {                
                history.push('/');
            }}
            errorCallback={error => {
                console.error(error);
                history.push('/');
            }}
        >
            <div>Redirecting...</div>
        </SignoutCallbackComponent>);
}

export const SignOutCallback = connect()(CallbackPageWithoutConnect);