import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from "components/shared-components/Loading";
import { APP_PREFIX_PATH } from "configs/AppConfig";
import Client from "./clients/profile";

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content" />}>
      <Switch>
        <Route
          path={`${APP_PREFIX_PATH}/home`}
          component={lazy(() => import(`./home`))}
        />
        <Route
          exact
          path={`${APP_PREFIX_PATH}/clients`}
          component={lazy(() => import(`./clients`))}
        />
        <Route exact path={`${APP_PREFIX_PATH}/clients/:id`}>
          <Client />
        </Route>
        <Route
          path={`${APP_PREFIX_PATH}/test`}
          component={lazy(() => import(`./test`))}
        />
        <Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/home`} />
      </Switch>
    </Suspense>
  );
};

export default React.memo(AppViews);
