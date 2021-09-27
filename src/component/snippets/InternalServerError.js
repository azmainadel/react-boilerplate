import React, {useContext, useEffect} from "react";
import {SettingsContext} from "../contexts/SettingsContext";
import CloseIcon from '@material-ui/icons/Close';
import Alert from "@material-ui/lab/Alert";
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

const InternalServerError = () => {
    const style = useStyles();
    const settings = useContext(SettingsContext);

    useEffect(() => {
        settings.internalServerError && setTimeout(() => settings.setInternalServerError(false), 5000);
    }, [settings]);

    return (
        <div>
            {settings.internalServerError && (
                <Slide in={true} direction="up">
                    <Alert severity="error"
                           className={style.alertContainer}
                           action={
                               <IconButton aria-label="close"
                                           color="inherit" size="small"
                                           onClick={() => {
                                               settings.setInternalServerError(false);
                                           }}
                               >
                                   <CloseIcon fontSize="inherit"/>
                               </IconButton>
                           }>
                        <AlertTitle>Something went wrong!</AlertTitle>
                        Please try again later.
                    </Alert>
                </Slide>
            )}
        </div>
    );
};

export default InternalServerError;
