import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import logo from "../asset/logo/android-chrome-192x192.png";
import React from "react";
import {useHistory} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import {AppBarStyle} from "../style/AppBarStyle";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(AppBarStyle);

const PublicAppBar = () => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <>
            <AppBar
                position="relative"
                style={{background: 'transparent'}}
                elevation={0}>

                <Toolbar className={classes.toolbarPublic}>
                    <Container className={classes.screen}>
                        <Grid
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                            container
                        >
                            <Grid item>
                                <img src={logo}
                                     alt="logo"
                                     width="120"
                                     style={{
                                         verticalAlign: 'bottom',
                                         cursor: 'pointer',
                                         margin: 24
                                     }}
                                     onClick={() => {
                                         history.push('/')
                                     }}
                                />
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default PublicAppBar;