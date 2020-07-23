//const mongoose = require('mongoose');
import mongoose from 'mongoose';

const db={ };

const schema = mongoose.Schema({
    description:{
                  type: String
                  ,required: true
                  ,default:""
                  /*,validate(value){
                      
                      if(value <1 ){
                          throw new Error("valor não permitido utilizae valores maiores que 0")
                      }
                  }*/
                }//"Compras em padaria"
    ,value:{
            type: Number
            ,required: true
            ,default:0
            /*,validate(value){
                
                if(value <1 ){
                    throw new Error("valor não permitido utilizae valores maiores que 0")
                }
            }*/
            }//16
    ,category:{
                type: String
                ,required: true
                ,default:""
                /*,validate(value){
                    
                    if(value <1 ){
                        throw new Error("valor não permitido utilizae valores maiores que 0")
                    }
                }*/
              }//"Mercado"
    ,year:{
            type: Number
            ,required: true
            ,default:0
            /*,validate(value){
                
                if(value <1 ){
                    throw new Error("valor não permitido utilizae valores maiores que 0")
                }
            }*/
          }//2019
    ,month:{
            type: Number
            ,required: true
            ,default:0
            /*,validate(value){
                
                if(value <1 ){
                    throw new Error("valor não permitido utilizae valores maiores que 0")
                }
            }*/
            }//1
    ,day:{
            type: Number
            ,required: true
            ,default:0
            /*,validate(value){
                
                if(value <1 ){
                    throw new Error("valor não permitido utilizae valores maiores que 0")
                }
            }*/
          }//1
    ,yearMonth:{
                  type: String
                  ,required: true
                  ,default:""
                  /*,validate(value){
                      
                      if(value <1 ){
                          throw new Error("valor não permitido utilizae valores maiores que 0")
                      }
                  }*/
                }//"2019-01"
    ,yearMonthDay:{
                    type: String
                    ,required: true
                    ,default:""
                    /*,validate(value){
                        
                        if(value <1 ){
                            throw new Error("valor não permitido utilizae valores maiores que 0")
                        }
                    }*/
                  }//"2019-01-01"
    ,type:{
            type: String
            ,required: true
            ,default:""
            /*,validate(value){
                        
                        if(value <1 ){
                            throw new Error("valor não permitido utilizae valores maiores que 0")
                        }
                    }*/
          }//"-"
})


const TransactionModel = mongoose.model('transaction', schema);

db.mongoose = mongoose;
db.url= process.env.DB_CONNECTION;
db.TransactionModel =  TransactionModel;


//module.exports = TransactionModel;

export {db} ;
