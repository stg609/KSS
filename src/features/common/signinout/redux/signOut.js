import { takeLatest } from 'redux-saga/effects';
import { SIGNOUT_BEGIN_EVENT, SIGNOUT_SUCCESS_EVENT } from './actionTypes';
import { userManager } from '../../../../utils/userManager';

export const signOutAction = () => ({
    type: SIGNOUT_BEGIN_EVENT,
});

// async action Creators
export function signOutAsyncAction() {
    return (dispatch) => {
        dispatch({
            type: SIGNOUT_BEGIN_EVENT,
        });

        userManager.signoutRedirect();
    };
}

// saga
function* signOutAsync() {
    yield userManager.signoutRedirect();
}

export function* watchSignOutAsync() {
    yield takeLatest(SIGNOUT_BEGIN_EVENT, signOutAsync);
}


// reducer
export function reducer(state, action) {
    switch (action.type) {
    case SIGNOUT_BEGIN_EVENT:
        return {
            ...state,
            isSignOutBegin: true,
        };
    case SIGNOUT_SUCCESS_EVENT:
        return {
            ...state,
            isSignOutBegin: false,
        };
    default:
        return state;
    }
}
