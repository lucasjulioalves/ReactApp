import React, { lazy, Suspense } from 'react';

const LazySideNav = lazy(() => import('./SideNav'));

const SideNav = props => (
  <Suspense fallback={null}>
    <LazySideNav {...props} />
  </Suspense>
);

export default SideNav;
