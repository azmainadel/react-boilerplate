import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {SectionStyle} from "../../style/SectionStyle";
import Box from "@material-ui/core/Box";
import {Button} from "@material-ui/core";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import theme from "../../style/Theme";
import {MAIL_URL} from "../../constant/Urls";

const useStyles = makeStyles(SectionStyle);

const ContactSection = () => {
    const classes = useStyles();

    const handleContactRequest = () => {
        window.open(MAIL_URL, '_blank');
    }

    return (
        <Container className={classes.screen}>
            <Box textAlign="center">
                <Typography variant="h2">
                    Random
                </Typography>

                <Typography style={{marginTop: 16}}>
                    Random Random Random Random
                </Typography>

                <Button
                    endIcon={<KeyboardArrowRightIcon/>}
                    onClick={handleContactRequest}
                    style={{
                        cursor: "pointer", margin: theme.spacing(8, 0),
                        color: '#FFF',
                        backgroundColor: '#6236FF',
                        borderRadius: 8,
                        padding: theme.spacing(1.5, 8, 1.5, 8)
                    }}
                    variant="contained"
                >
                    Try it!
                </Button>
            </Box>
        </Container>
    );
}

export default ContactSection;