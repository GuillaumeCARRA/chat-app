import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "./AuthContext";

export const ChatContext = createContext();



// we create an auth provider 
// and we create our user indise there
// and we will be able to use that user inside others components
// children represents our components
export const ChatContextProvider = ({children}) => {

    const {currUser} = useContext(AuthContext);
   
    const INITIAL_STATE = {
        chatId: "null",
        user: {}
    }

    const chatReducer = (state,action) => {
        switch(action.type){
            case "CHANGE_USER":
                return {
                    user: action.payload, 
                    chatId: currUser.id > action.payload.id 
                    ? currUser.id + action.payload.id 
                    : action.payload.id + currUser.id
                }
            default: 
                return state;
        }
    }

    const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

    return (
        // children gonna be App.js
        // this components can reach the current user
        // and so any components that we wrap with this auth context provider
        // will be able to reach this current user.
        <ChatContext.Provider value={{data:state, dispatch}}>
        {children}
        </ChatContext.Provider>
    )
};