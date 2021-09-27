import {ThemeProvider} from '@material-ui/core/styles';
import './App.css';
import AuthContextProvider from "./component/contexts/AuthContext";
import SettingsContextProvider from "./component/contexts/SettingsContext";
import theme from "./style/Theme";
import AppRouter from "./router/AppRouter";

function App() {
    return (
        <AuthContextProvider>
            <SettingsContextProvider>
                <ThemeProvider theme={theme}>
                    <AppRouter/>
                </ThemeProvider>
            </SettingsContextProvider>
        </AuthContextProvider>
    );
}

export default App;