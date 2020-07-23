function leftPad(value , count = 2 , char ='0'){
    if(count - value.toString().length < 0){
        return value.toString()
    }else{
        return `${char.repeat(count - value.toString().length)}${value}`;
    }
}

function getNewTimeStamp(){
    const now = new Date();
    return `${leftPad(now.getDate())}/${leftPad(now.getMonth())}/${leftPad(now.getFullYear())} ${leftPad(now.getHours())}:${leftPad(now.getMinutes())}:${leftPad(now.getSeconds())}.${leftPad(now.getMilliseconds(),3)}`
}


const money = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

function getMonthName(numMonth,shortName=true){
    const index = Number(numMonth)-1
    
    const monthName = [
                            {shortName :"jan" , fullName :"janeiro"}
                            ,{shortName :"fev" , fullName :"fevereiro"}
                            ,{shortName :"mar" , fullName :"março"}
                            ,{shortName :"abr" , fullName :"abril"}
                            ,{shortName :"mai" , fullName :"maio"}
                            ,{shortName :"jun" , fullName :"junho"}
                            ,{shortName :"jul" , fullName :"julho"}
                            ,{shortName :"ago" , fullName :"agosto"}
                            ,{shortName :"set" , fullName :"setembro"}
                            ,{shortName :"out" , fullName :"outubro"}
                            ,{shortName :"nov" , fullName :"novembro"}
                            ,{shortName :"dez" , fullName :"dezembro"}
                    ] 

if(shortName){
    return monthName[index].shortName
}else{
    return monthName[index].fullName
}
                
                }


export {getNewTimeStamp,getMonthName,leftPad,money};