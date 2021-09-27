import {createContext, useState} from "react";

export const AuthContext = createContext(undefined);

const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <AuthContext.Provider
            value={{
                user,
                isLoggedIn,
                setUser,
                setIsLoggedIn
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
