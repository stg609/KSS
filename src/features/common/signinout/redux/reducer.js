import initialState from './initialState';
import { reducer as SignOutReducer } from './signOut';
import { reducer as SignInReducer } from './signIn';

const reducers = [SignInReducer, SignOutReducer];

export default function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
    default:
        newState = state;
        break;
    }

    return reducers.reduce((s, r) => r(s, action), newState);
}
