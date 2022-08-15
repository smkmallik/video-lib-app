import { createContext, useContext, useState } from "react";

const createLike = createContext({
    like: []
});

const LikeProvider = ({children}) => {
    const [like, setLike] = useState({
        like: []
    })

    return (
        <createLike.Provider value={{like, setLike}}>
            {children}
        </createLike.Provider>
    )
}

const useLike = () => useContext(createLike);

export {LikeProvider, useLike};