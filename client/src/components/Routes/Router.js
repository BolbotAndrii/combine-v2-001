import React from 'react';
import {Redirect, Switch, Route} from "react-router-dom";
import routes from "./Routes";
import LoginPage from "../../pages/Common/Login.Page";
import {HOME_ROUTE, LOGIN_ROUTE} from "../../utils/consts";

export const useRouterComponent = isAuthenticated => {

        if( isAuthenticated  ) {
            return (
                <Switch>
                    { routes.map((route) =>
                        <Route key={route.path} {...route}  />
                    )}
                    <Redirect to={HOME_ROUTE} />
                </Switch>
            )
        }

        return (
            <Switch>
                <Route path={LOGIN_ROUTE} component={LoginPage} exact/>
                <Redirect to={LOGIN_ROUTE}/>
            </Switch>
        )

}