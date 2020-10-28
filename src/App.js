import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styles from './App.module.css';
import { SignInCallback, SignOutCallback } from './features/common/signinout';
import { HomePage } from './features/pages/home';
import { CoursesPage } from './features/pages/courses';


function App() {
    return (
        <div className={styles.App}>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/courses" component={CoursesPage} />
                <Route path="/signin-oidc" component={SignInCallback} />
                <Route path="/signout-oidc" component={SignOutCallback} />
            </Switch>
        </div>
    );
}

export default App;
