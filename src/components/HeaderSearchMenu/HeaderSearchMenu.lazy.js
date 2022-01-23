import React, { lazy, Suspense } from 'react';

const LazyHeaderSearchMenu = lazy(() => import('./HeaderSearchMenu'));

const HeaderSearchMenu = props => (
  <Suspense fallback={null}>
    <LazyHeaderSearchMenu {...props} />
  </Suspense>
);

export default HeaderSearchMenu;
