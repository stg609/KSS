import { takeLatest } from 'redux-saga/effects';
import { SIGNIN_BEGIN_EVENT, SIGNIN_SUCCESS_EVENT } from './actionTypes';
import { userManager } from '../../../../utils/userManager';

// async action Creators
export const signInAction = () => ({
    type: SIGNIN_BEGIN_EVENT,
});

export function signInAsyncAction() {
    return (dispatch) => {
        dispatch({
            type: SIGNIN_BEGIN_EVENT,
        });

        userManager.signinRedirect();
    };
}

// saga
function* signInAsync() {
    yield userManager.signinRedirect();
}

export function* watchSignInAsync() {
    yield takeLatest(SIGNIN_BEGIN_EVENT, signInAsync);
}


// reducer
export function reducer(state, action) {
    switch (action.type) {
    case SIGNIN_BEGIN_EVENT:
        return {
            ...state,
            isSignInBegin: true,
        };
    case SIGNIN_SUCCESS_EVENT:
        return {
            ...state,
            isSignInBegin: false,
        };
    default:
        return state;
    }
}
