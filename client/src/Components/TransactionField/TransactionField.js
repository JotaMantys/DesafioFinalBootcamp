import React from 'react'
import {money} from '../../helpers/dateTimeHelpers.js'
import TransactionsResume from './TransactionsResume/TransactionsResume.js'
import ActionButton from '../ActionButtons/ActionButton.js' 


export default function TransactionField(properties) {
    const {arrT,search,onDeleteTransaction,openModal} = properties;
    //console.log(arrT)
    let arrF;
    
    const clickBt = (id,type)=>{
        console.log(`${type}|${id}`)

        if(type === "delete"){
           
            onDeleteTransaction(arrT.find((transaction) =>{
                return transaction._id ===id
            }))
        }else{
            openModal(arrT.find((transaction) =>{
                return transaction._id ===id
            }))
        }

    }
    //const arrayTeste =arrT.transactions
    //console.log(arrT.transaction

    //console.log(arrT)
  
        if(arrT!==undefined){

            if(search!==""){
                 arrF = arrT.filter((transaction)=>{
                     return transaction.description.toLowerCase().includes(search.toLowerCase())
                 });
            }else arrF = arrT

        return (
            <div>
                    <TransactionsResume arr={arrF}/>
                   {arrF.map(transaction=>{
                        const {
                            _id			
                            ,description	
                            ,value		
                            ,category	
                            ,day			
                            ,type		
                            
                        } = transaction
                    return (<div key ={_id} id ={_id}  style={type==="-" ? style.out : style.in} className={`card ${type}`}>
                                 <div style={{
                                     'width' : '100px'
                                 }}>
                                     <p>{day}</p>
                                </div>  
                                <div style={{
                                     'width' : '400px'
                                 }}>
                                    <p>{category}</p>
                                    <p>{description}</p>
                                </div>
                                <div style={{
                                     'width' : '200px'
                                 }}>
                                    <p>{money.format(value)}</p>
                                </div>

                                <ActionButton tip="edit"   id={_id} onActionClick={clickBt}/>
                                <ActionButton tip="delete" id={_id} onActionClick={clickBt}/>
                                
                                
                                 
                            </div>)
                   })}
                
            </div>
    )
    }else{
        return <p>Nada a Exibir</p>
    }


    
}

const style = {
         
                "out" :{
                        'display':'flex'
                        ,'flexDirection':'collumn'
                        ,'padding': '10px'
                        ,'alignItems': 'center'
                        ,"background": "red"
                        ,"color" : "white"
                        }
                ,"in" :{
                        'display':'flex'
                        ,'flexDirection':'collumn'
                        ,'padding': '10px'
                        ,'alignItems': 'center'
                        ,"background": "green"
                        ,"color" : "white"
                        }
                }