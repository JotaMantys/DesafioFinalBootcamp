import { distinctYearMonth
        ,listTransactionsPeriod
        ,newTrasaction
        ,alterTransactionById
        ,excludeTransactionById} from '../services/transactionService.js'



const createTransaction = async (request , response)=>{
    try {
        const data  = await newTrasaction(request);

        response.status(200).send(data);
        log.info(`POST API/TRANSACTION/ ${data}`);
    } catch (err) {
        response.status(500).send({message : err.message});
        log.error(`POST API/TRANSACTION/ ${err.message}`);
    }

}

const getTransactionsPeriod = async (request , response)=>{
    const { period } = request.query
    
    if(period){
        try {
            const arr = {}
            const data = await listTransactionsPeriod(period)
             arr.length = data.length
             arr.transactions = data
            
            response.status(200).send(arr)
            log.info(`GET API/TRANSACTION/ ${period}`)
        } catch (err) {
            response.status(500).send({message : err.message});
            log.error(`GET API/TRANSACTION/ ${err.message}`);
        }
    }else {
        response.status(500).send({message : "é necessários informar o periodo no formato AAAA-MM"})
        log.info(`GET API/TRANSACTION/ periodo Invalido`)
    }
}

const updateTransactionById = async (request, response)=>{
    try {
        response.status(200).send({message : await alterTransactionById(request)})
        log.info(`PUT API/TRANSACTION/:id ${request.params.id}`)
    } catch (err) {
        response.status(500).send({message : err.message});
        log.error(`PUT API/TRANSACTION/:id ${err.message}`)
    }
} 


const deleteTransactionById = async (request, response)=>{
    const {id} = request.params
    try {
        response.status(200).send({message : await excludeTransactionById(id)})
        log.info(`DELETE API/TRANSACTION/:id ${id}`)
    } catch (err) {
        response.status(500).send({message : err.message});
        log.error(`DELETE API/TRANSACTION/:id ${err.message}`)
    }
} 

const listDates = async(_request, response)=>{

    try {
        response.status(200).send(await distinctYearMonth())
        log.info(`GET API/TRANSACTION/DATES`)
    } catch (err) {
        response.status(500).send({message : err.message});
        log.error(`GET API/TRANSACTION/DATES ${err.message}`)
    }

}

export {  getTransactionsPeriod
         ,createTransaction
         ,updateTransactionById
         ,deleteTransactionById
         ,listDates};