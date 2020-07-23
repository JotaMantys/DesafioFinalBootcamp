import {db} from '../models/TransactionModel.js';


let  conn;
const model = db.TransactionModel

async function  connect(db_url){
  
    try {
        conn = await db.mongoose.connect(db_url, {
                                            useNewUrlParser: true,
                                            useUnifiedTopology: true,
                                          });
        //logger.info('Conectado ao banco de dados');
       log.info("Conectado ao banco de dados");

        
        return conn;
      } catch (error) {
        //logger.error(`Erro ao conectar no banco de dados! ${error}`);
        throw new Error(`Erro ao conectar no banco de dados! ${error.message}`)
        
      }

}

async function disconect(){
  if(conn){
    conn.close();
    log.info('desconectado');
  }
}

async function distinctYearMonth(){
  const dates = await model.distinct("yearMonth")
  
  const dinstinctDates = dates.map(item =>{

    return { ano  : parseInt(item.substring(0,4))
             ,mes : parseInt(item.substring(5))}
  }).sort( (a,z)=>{
    return a.ano -z.ano
  });

  return dinstinctDates
}

async function listTransactionsPeriod(period){
  return await model.find({ yearMonth : period})
}

async function newTrasaction(request){
  const {
    description
   ,value   
   ,category
   ,year     
   ,month
   ,day        
   ,yearMonth
   ,yearMonthDay
   ,type 
} = request.body

const newTransaction = new model({
                                            "description"  :description
                                           ,"value"        :value
                                           ,"category"     :category
                                           ,"year"         :year
                                           ,"month"        :month
                                           ,"day"          :day
                                           ,"yearMonth"    :yearMonth
                                           ,"yearMonthDay" :yearMonthDay
                                           ,"type"         :type
                                       });
  try {
      return await newTransaction.save()
  } catch (err) {
      throw new Error(err.message)
  }

}

async function alterTransactionById(request){
  const {
    description
   ,value   
   ,category
   ,year     
   ,month
   ,day        
   ,yearMonth
   ,yearMonthDay
   ,type 
    } = request.body

const {id} = request.params
  try {
      await model.findOneAndUpdate({_id : id},{
                                                      "description"   :description
                                                      ,"value"        :value
                                                      ,"category"     :category
                                                      ,"year"         :year
                                                      ,"month"        :month
                                                      ,"day"          :day
                                                      ,"yearMonth"    :yearMonth
                                                      ,"yearMonthDay" :yearMonthDay
                                                      ,"type"         :type
                                                    } )
      return "Documento Atualizado com sucesso";
  } catch (err) {
    throw new Error(err.message);
  }
}


async function excludeTransactionById(id){
  
    try {
        await model.findOneAndDelete({_id : id})
        return "Documento Deletado com sucesso"
    } catch (err) {
        throw new Error(err.message)
    }
}
export { connect
        ,disconect
        ,distinctYearMonth
        ,listTransactionsPeriod
        ,newTrasaction
        ,alterTransactionById
        ,excludeTransactionById};
// Aqui havia um erro difícil de pegar. Importei como "transactionModel",
// com "t" minúsculo. No Windows, isso não faz diferença. Mas como no Heroku
// o servidor é Linux, isso faz diferença. Gastei umas boas horas tentando
// descobrir esse erro :-/
//const TransactionModel = require('../models/TransactionModel');

