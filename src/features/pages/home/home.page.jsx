import React from 'react';
import { Link } from 'react-router-dom';
import { DefaultLayout } from '../layouts';

export const HomePage = () => (
    <DefaultLayout>
        <h2>Welcome to K.S.S</h2>
        <Link to="/courses">课程</Link>
    </DefaultLayout>
);
