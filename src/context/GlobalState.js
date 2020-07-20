import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import { waitForDomChange } from '@testing-library/react';

const GET_ITEMS_FROM_LOCAL_STORAGE = () => {
    return JSON.parse(localStorage.getItem('transactions'))
}

//Initial State
const initialState = {
    transactions: GET_ITEMS_FROM_LOCAL_STORAGE() || [
    ]
}

//Create context
export const GlobalContext = createContext(initialState);


//Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //actions
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    function reset(){
        dispatch({
            type:'RESET',

        })
    }
    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction,
            reset
        }}>
            {children}
        </GlobalContext.Provider>
        )
}