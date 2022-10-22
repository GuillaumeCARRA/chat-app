import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export const AuthContext = createContext();

// we create an auth provider 
// and we create our user indise there
// and we will be able to use that user inside others components
// children represents our components
export const AuthContextProvider = ({children}) => {
    const [currUser, setCurrUser] = useState({});

    // we check if we have an user or not
    useEffect(() => {
        // firebase function
        const unsub = onAuthStateChanged(auth, (user) => {
            setCurrUser(user);
            console.log('user connected', user);
      });

      // clean up function for realtime operation
      // otherwise its gonna cause memory leaking
      return () => {
            unsub();
      };
    }, []);

    return (
        // children gonna be App.js
        // this components can reach the current user
        // and so any components that we wrap with this auth context provider
        // will be able to reach this current user.
        <AuthContext.Provider value={{currUser}}>
        {children}
        </AuthContext.Provider>
    )
};

