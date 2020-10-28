import { all } from 'redux-saga/effects';
import { watchSignInAsync } from './signIn';
import { watchSignOutAsync } from './signOut';

export default function* SignInOutSaga() {
    yield all([
        watchSignInAsync(),
        watchSignOutAsync(),
    ]);
}
