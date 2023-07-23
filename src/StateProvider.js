import React, { createContext, useReducer, useContext} from "react";

// Prepares DataLayer
export const StateContext = createContext();

// Wrap our app and provide the Data Layer
export const StateProvider = ({reducer, initialState ,children}) => (
    <StateContext.Provider value ={useReducer(reducer, initialState)} >
        {children}
    </StateContext.Provider>
);

// Pull information from DataLayer
export const useStateValue = () => useContext(StateContext);

