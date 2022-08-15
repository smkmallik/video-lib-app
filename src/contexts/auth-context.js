import { useContext, createContext, useState } from "react";


const CreateAuth = createContext({ user: null, token: null });

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({
        user: null,
        token: null
    })
    return (
        <CreateAuth.Provider value={{user, setUser}}>
            {children}
        </CreateAuth.Provider>
    )
}

const useAuth = () => useContext(CreateAuth);

export { useAuth, AuthProvider};