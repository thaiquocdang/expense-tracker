import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction'


export const TransactionList = () => {
    const { transactions, reset } = useContext(GlobalContext);

    // const reset= () =>{
        // }
            // console.log(reset,'reset');

    return (
        <>
            <h3>History</h3>
            <ul className="list">
            {transactions.map(transaction =>(<Transaction key={transaction.id} transaction={transaction} />))}
            </ul>

            <button onClick={() => reset()} className="btn reset-button">Reset</button>
        </>
    )
}
