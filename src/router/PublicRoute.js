import React from "react";
import {Route} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import PublicAppBar from "../component/PublicAppBar";
import Footer from "../component/Footer";

const PublicRoute = ({
                         component: Component,
                         path,
                         ...rest
                     }) => {

    return (
        <Route {...rest}
               render={props => {
                   return (
                       <div className="App">
                           <header className="App-header">
                               <React.Fragment>
                                   <CssBaseline/>
                                   <PublicAppBar/>
                                   <Component {...props} />
                                   <Footer/>
                               </React.Fragment>
                           </header>
                       </div>
                   );
               }}
        />
    );
};


export default PublicRoute;
