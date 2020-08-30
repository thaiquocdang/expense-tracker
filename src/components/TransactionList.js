import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction';
import { Button } from './Button'


export const TransactionList = () => {
    const { transactions, reset } = useContext(GlobalContext);
    
    return (
        <>
            <h3>History</h3>
            <ul className="list">
            {transactions.map(transaction =>(<Transaction key={transaction.id} transaction={transaction} />))}
            </ul>
            <Button onClick={() => reset()}>Reset</Button>
        </>
    )
}
