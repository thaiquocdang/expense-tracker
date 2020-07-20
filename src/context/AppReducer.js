export default (state, action) => {
    let newState;
    switch(action.type) {
        
        case 'DELETE_TRANSACTION':
            newState = {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
            // console.log(newState,'newstate');
            SAVE_DATA_TO_LOCAL_STORAGE(newState)
            return newState
        
        case 'ADD_TRANSACTION':
            newState = {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }

            SAVE_DATA_TO_LOCAL_STORAGE(newState)

            console.log(newState,'newstate add');
            return newState

        case 'RESET':
            localStorage.removeItem('transactions')
            return {
                ...state,
                transactions: []
            }

        default:
            return state;
        
    }
}

const SAVE_DATA_TO_LOCAL_STORAGE = (newState) => {
    localStorage.setItem('transactions', JSON.stringify(newState.transactions))
  }