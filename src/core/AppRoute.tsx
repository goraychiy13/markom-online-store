import React, { memo } from 'react';
import { Route } from 'react-router-dom';

type Props = {
  path: string;
  exact?: boolean;
  children: React.ReactNode;
  isPrivate?: boolean;
};

export function AppRoute({
  path,
  exact,
  children,
}: // isPrivate,
Props): JSX.Element {
  return (
    <Route path={path} exact={exact}>
      {children}
    </Route>
  );
}

export default memo(AppRoute);
