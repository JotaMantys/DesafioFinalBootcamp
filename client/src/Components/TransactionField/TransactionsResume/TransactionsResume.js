import React from 'react'
import {money} from '../../../helpers/dateTimeHelpers.js'


export default function TransactionsResume(properties) {
    const {arr} = properties

    const resume = {}

    resume.totalLancametos = arr.length
    resume.sumIn = arr.filter((transaction)=>{
                                        return transaction.type === '+'
                                    }).reduce((acc,curr)=>{
                                        return acc += curr.value
                                    },0)
    resume.sumOut = arr.filter((transaction)=>{
                                        return transaction.type === '-'
                                    }).reduce((acc,curr)=>{
                                        return acc += curr.value
                                    },0)
    resume.saldo = resume.sumIn - resume.sumOut
                //console.log(`+${resume.sumIn} -${resume.sumOut} saldo=${resume.saldo}`)
    return (
        <div className="card" style={{
            'display':'flex'
            ,'flexDirection':'collumn'
            , 'justifyContent': 'space-between'
        }}>
            <p >Lançamentos : {resume.totalLancametos} </p>
            <p style={{"color":"green"}}>Receitas : {money.format(resume.sumIn)}</p>
            <p style={{"color":"red"}}>Despesas : {money.format(resume.sumOut)}</p>
            <p>Saldo : {money.format(resume.saldo)}</p>
        </div>
    )
}
