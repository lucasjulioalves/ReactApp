import React, { lazy, Suspense } from 'react';

const LazyHeaderTabs = lazy(() => import('./HeaderTabs'));

const HeaderTabs = props => (
  <Suspense fallback={null}>
    <LazyHeaderTabs {...props} />
  </Suspense>
);

export default HeaderTabs;
