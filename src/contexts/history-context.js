import { createContext, useContext, useState } from 'react';

const createHistory = createContext({
    history: []
});

const HistoryProvider = ({children}) => {
    const [history, setHistory] = useState({
        history: []
    });

    return (
        <createHistory.Provider value={{ history, setHistory }}>
            {children}
        </createHistory.Provider>
    )
}

const useHistory = () => useContext(createHistory);

export { useHistory, HistoryProvider };