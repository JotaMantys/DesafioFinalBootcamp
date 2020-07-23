import axios from 'axios'

const api_Url = "https://desafiofinaljoel19072020.herokuapp.com"

async function getDistinctDates(){//ok
    const response = await axios.get(`${api_Url}/api/transaction/dates`)
    
    return response.data
}

async function getTransactions(period){//ok
    const response = await axios.get(`${api_Url}/api/transaction?period=${period}`)

    const arr = response.data.transactions
    //console.log(arr)
    return arr
}

async function createTransaction(newTransaction){
    const response = await axios.post(`${api_Url}/api/transaction`,newTransaction )
    return response.data
}

async function updateTransaction(id,alteredTransaction){
    const response = await axios.put(`${api_Url}/api/transaction/${id}`,alteredTransaction)
    return response.data
}

async function deleteTransaction(id){//ok
    const response = await axios.delete(`${api_Url}/api/transaction/${id}`)
    return response.data
}
/*
transactionRouter.post("/", createTransaction)
transactionRouter.put("/:id", updateTransactionById)
transactionRouter.delete("/:id", deleteTransactionById)

*/
export { getDistinctDates 
        ,getTransactions
        ,createTransaction
        ,updateTransaction
        ,deleteTransaction}