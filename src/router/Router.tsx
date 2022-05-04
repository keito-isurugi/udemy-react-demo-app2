import { memo, VFC } from "react";
import { Switch, Route } from "react-router-dom"


import { Login } from "../components/pages/Login";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { homeRoutes } from "./HomeRoutes"

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Login></Login>
      </Route>
      <Route 
        path="/home" 
        render={( {match: { url } }) => (
        <Switch>
          {homeRoutes.map((route) => (
            <Route 
            key={route.path} 
            exact={route.exact} 
            path={`${url}${route.path}`}
            >
              <HeaderLayout>
                {route.children}
              </HeaderLayout>
            </Route>
          ))}
        </Switch>
      )}/>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
});