import React, {useContext, useEffect} from "react";
import Alert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';
import {SettingsContext} from "../contexts/SettingsContext";
import IconButton from "@material-ui/core/IconButton";
import AlertTitle from "@material-ui/lab/AlertTitle";
import {makeStyles} from "@material-ui/core";
import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles({
    alertContainer: {
        position: "fixed",
        bottom: 15,
        width: 500,
        right: 15,
        margin: 0,
        zIndex: 9999
    }
});

const NetworkError = () => {
    const settings = useContext(SettingsContext);
    const style = useStyles();

    useEffect(() => {
        settings.networkError && setTimeout(() => settings.setNetworkError(false), 5000);
    }, [settings, settings.networkError]);

    return (
        <div>
            {settings.networkError && (
                <Slide in={true} direction="up">
                    <Alert severity="warning"
                           className={style.alertContainer}
                           action={
                               <IconButton aria-label="close"
                                           color="inherit" size="small"
                                           onClick={() => {
                                               settings.setNetworkError(false);
                                           }}
                               >
                                   <CloseIcon fontSize="inherit"/>
                               </IconButton>
                           }>
                        <AlertTitle>Network Error!</AlertTitle>
                        <p>Please check your internet connection and try again.</p>
                    </Alert>
                </Slide>
            )}
        </div>
    );

}


export default NetworkError;
