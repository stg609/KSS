/* eslint-disable import/prefer-default-export */
import React from 'react';
import { DefaultLayout } from '../layouts';

export const HomePage = () => (
    <DefaultLayout hideBreadcrumb={false} header={<title>首页 | K.S.S.</title>}>
        <h2>Welcome to K.S.S</h2>
    </DefaultLayout>
);
