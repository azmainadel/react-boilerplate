import '../App.css';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const frank_ruhl_libre_black = "'Frank Ruhl Libre', serif";
const jost_medium = "'Jost', sans-serif";

const theme = createMuiTheme({
    palette: {
        secondary: {
            main: '#6236FF',
            contrastText: '#fff',
        },
    },

    typography: {
        fontFamily: jost_medium,
        fontSize: 22,
        color: '#252525',
        subtitle1: {
            fontFamily: jost_medium,
            fontSize: 18,
            color: '#434364'
        },
        h5: {
            fontFamily: jost_medium,
            fontSize: 28,
            color: '#A4A4A4',
            fontWeight: 900,
            wordSpacing: 16
        },
        h4: {
            fontFamily: jost_medium,
            fontSize: 40,
            color: '#0066FF',
            fontWeight: 900,
        },
        h3: {
            fontFamily: frank_ruhl_libre_black,
            fontSize: 48,
            color: '#6236FF'
        },
        h2: {
            fontFamily: frank_ruhl_libre_black,
            fontSize: 48,
            color: '#434364'
        },
        button: {
            fontFamily: jost_medium,
            fontSize: 16,
            fontWeight: 500,
        },
    },
});

export default theme;