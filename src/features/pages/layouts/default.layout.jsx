import React from 'react';
import { Header } from '../../common/header';

export const DefaultLayout = ({children}) => (<>
    <Header />
    {children}
</>);
