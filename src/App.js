import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.module.css';
import { SignInCallback, SignOutCallback } from './features/common/signinout';
import { HomePage } from './features/pages/home';
import { CoursesPage } from './features/pages/courses';
import { CourseDetailsPage } from './features/pages/coursedetails';


function App() {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/courses" component={CoursesPage} />
            <Route exact path="/courses/:courseId" component={CourseDetailsPage} />
            <Route path="/signin-oidc" component={SignInCallback} />
            <Route path="/signout-oidc" component={SignOutCallback} />
        </Switch>
    );
}

export default App;
