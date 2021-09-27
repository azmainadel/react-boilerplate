import React, {lazy, Suspense} from "react";
import {Router, Switch} from "react-router-dom";
import {createBrowserHistory} from "history";
import SuspenseLoader from "../component/snippets/SuspenseLoader";
import NetworkError from "../component/snippets/NetworkError";
import InternalServerError from "../component/snippets/InternalServerError";
import PublicRoute from "./PublicRoute";

const MainPage = lazy(() => import("../component/MainPage"));

export const history = createBrowserHistory();

const AppRouter = () => {
    return (
        <Router history={history}>
            <Suspense fallback={<SuspenseLoader/>}>
                <Switch>
                    <PublicRoute exact={true} path="/" component={MainPage}/>
                </Switch>
            </Suspense>

            <NetworkError/>
            <InternalServerError/>
        </Router>
    );
}

export default AppRouter;
