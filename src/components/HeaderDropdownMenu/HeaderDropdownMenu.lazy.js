import React, { lazy, Suspense } from 'react';

const LazyHeaderDropdownMenu = lazy(() => import('./HeaderDropdownMenu'));

const HeaderDropdownMenu = props => (
  <Suspense fallback={null}>
    <LazyHeaderDropdownMenu {...props} />
  </Suspense>
);

export default HeaderDropdownMenu;
