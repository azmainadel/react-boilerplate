import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {Button} from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import theme from "../../style/Theme";
import hero_img from "../../asset/logo/android-chrome-512x512.png";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {SectionStyle} from "../../style/SectionStyle";

const useStyles = makeStyles(SectionStyle);

const FirstSection = (props) => {
    const classes = useStyles();

    return (
        <Container className={classes.screen}>
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
            >
                <Grid xs={4} item>
                    <Typography variant="h2">
                        Random
                    </Typography>
                    <div style={{display: "flex"}}>
                        <Typography variant="h3" noWrap>
                            Random
                        </Typography>
                        <Typography variant="h2" style={{marginLeft: 8}} noWrap>
                            Random
                        </Typography>
                    </div>
                    <Typography variant="h2">
                        Random Random Random
                    </Typography>

                    <Typography style={{marginTop: 16}} variant="body1">
                        Random Random Random Random
                    </Typography>

                    <Button
                        endIcon={<KeyboardArrowRightIcon/>}
                        onClick={() => props.setRefToTrySection(true)}
                        style={{
                            cursor: "pointer", margin: theme.spacing(8, 0),
                            color: '#FFF',
                            backgroundColor: '#6236FF',
                            borderRadius: 8,
                            padding: theme.spacing(1.5, 8, 1.5, 8)
                        }}
                        variant="contained"
                    >
                        Try Now
                    </Button>
                </Grid>

                <Grid xs={7} item>
                    <img src={hero_img} style={{
                        width: "100%",
                        height: "auto"
                    }} alt="card"/>
                </Grid>
            </Grid>
        </Container>
    );
}

export default FirstSection;