import React from 'react';
import { Routes as ReactRouterDomRoutes, Route } from 'react-router-dom';

import Main from '../pages/Main';

export default function Routes() {
  return (
    <ReactRouterDomRoutes>
      <Route path="/" element={<Main />} />
    </ReactRouterDomRoutes>
  );
}
