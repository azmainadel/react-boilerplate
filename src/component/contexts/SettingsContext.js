import {createContext, useState} from "react";

export const SettingsContext = createContext(undefined);

const SettingsContextProvider = ({children}) => {
    const [loader, setLoader] = useState(false);
    const [networkError, setNetworkError] = useState(false);
    const [internalServerError, setInternalServerError] = useState(false);

    return (
        <SettingsContext.Provider
            value={{
                loader,
                networkError,
                internalServerError,
                setLoader,
                setNetworkError,
                setInternalServerError
            }}
        >
            {children}
        </SettingsContext.Provider>
    );
};

export default SettingsContextProvider;