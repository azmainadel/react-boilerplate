import React from 'react';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import customLogo from "../asset/logo/android-chrome-192x192.png";
import {SectionStyle} from "../style/SectionStyle";
import {API_URL} from "../constant/Urls";

const useStyles = makeStyles(SectionStyle);

const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Container className={classes.footerScreen}>
                <Grid
                    container
                    direction="row"
                    justify="space-around"
                    alignItems="center"
                >
                    <Grid item>
                        <img src={customLogo}
                             style={{width: "120", cursor: 'pointer'}}
                             alt="logo"
                             onClick={() => window.scrollTo({left: 0, top: 0, behavior: 'smooth'})}
                        />
                    </Grid>

                    <Grid item>
                        <Typography style={{marginTop: 16, fontSize: 18, color: '#6236FF'}}>
                            Privacy Policy
                        </Typography>
                    </Grid>

                    <Grid item>
                        <img src={customLogo}
                             style={{width: "120", cursor: 'pointer'}}
                             alt="logo"
                             onClick={() => window.open(API_URL, '_blank')}
                        />
                    </Grid>
                </Grid>
            </Container>
        </footer>
    );
}

export default Footer;