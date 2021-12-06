import React, { useContext, useState } from "react";


export const useGlobalContext = () => {
    return useContext(AppContext);
}

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {


    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [edame, setEdame] = useState(false);



    return (
        <AppContext.Provider
            value={{
                name,
                setName,
                password,
                setPassword,
                edame,
                setEdame
            }}
        >
            {children}
        </AppContext.Provider>
    )
}