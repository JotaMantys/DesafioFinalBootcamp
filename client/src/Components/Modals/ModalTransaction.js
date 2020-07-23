import React,{useState,useEffect } from 'react'
import Modal from 'react-modal'


Modal.setAppElement("#root");

export default function ModalTransaction(properties) {
    const {
         onClose 
        ,onSave 
        ,selected
    } =properties

    //const [transaction , setTransaction] = useState({})
    //console.log(`${selected.year}-${selected.month.toString().padStart(2,"0")}-${selected.day.toString().padStart(2,"0")}`)
    const [_id]                                         =useState(selected._id === undefined ? undefined: selected._id);
    const [description,setDescription]                  =useState(selected.description === undefined ? "" : selected.description) ;
    const [value,setValue]                              =useState(selected.value=== undefined ? "" : selected.value)  ;
    const [category,setCategory]                        =useState(selected.category=== undefined ? "" : selected.category);
    /*const [year,setYear]                                =useState(selected.year=== undefined ? "" : selected.year);
    const [month,setMonth]                              =useState(selected.month=== undefined ? "" : selected.month);
    const [day,setDay]                                  =useState(selected.day=== undefined ? "" : selected.day);
    const [yearMonth,setYearMonth]                      =useState(selected.yearMonth=== undefined ? "" : selected.yearMonth);
    const [yearMonthDay,setYearMonthDay]                =useState(selected.yearMonthDay=== undefined ? "" : selected.yearMonthDay);*/
    const [datef ,setDatef]                               =useState(selected.year=== undefined ? "" : `${selected.year}-${selected.month.toString().padStart(2,"0")}-${selected.day.toString().padStart(2,"0")}`);
    const [type,setType]                                =useState(selected.type=== undefined ? "" : selected.type);

    const handleChangeFields = (event)=>{
        switch(event.target.id){
            case "description" : 
                setDescription(event.target.value)
            break

            case "Value"       : 
                setValue(event.target.value)
            break

            case "category"    : 
                setCategory(event.target.value)
            break

           /* case "year"        : 
                setYear(event.target.value)
            break

            case "month"       : 
                setMonth(event.target.value)
            break

            case "day"         : 
                setDay(event.target.value)
            break

            case "yearMonth"   : 
                setYearMonth(event.target.value)
            break

            case "YearMonthDay": 
                setYearMonthDay(event.target.value)
            break*/

            case "type"        : 
                setType(event.target.value)
            break
            
            case "datef" :
                setDatef(event.target.value)
                
            break
            default :
               
            break
        }
    }
    //const [erroMessage , setErroMessage] = useState("")

    const handleKeydown = (event)=>{
        if(event.key === 'Escape'){
                onClose()
            }
    }

    const handleClose =()=>{
        onClose()
    }

    const handleFormSubmit = (event) =>{
        event.preventDefault()
        const formData={}
        
        if(_id === undefined){
             
         
                formData.description = description
                formData.value = value
                formData.category = category
                formData.year = datef.toString().substr(0,4)
                formData.month = datef.toString().substr(5,2)
                formData.day = datef.toString().substr(8,2)
                formData.yearMonth = `${datef.toString().substr(0,4)}-${datef.toString().substr(5,2)}`
                formData.yearMonthDay = datef.toString()
                formData.type = type
            


        }else{

            formData._id = _id
            formData.description = description
            formData.value = value
            formData.category = category
            formData.year = datef.toString().substr(0,4)
            formData.month = datef.toString().substr(5,2)
            formData.day = datef.toString().substr(8,2)
            formData.yearMonth = `${datef.toString().substr(0,4)}-${datef.toString().substr(5,2)}`
            formData.yearMonthDay = datef.toString()
            formData.type = type
        }
        
        
        
        onSave(formData,_id===undefined)

        
    }

 
    useEffect(() => {
            document.addEventListener('keydown',handleKeydown)
        return () => {
            document.removeEventListener('keydown',handleKeydown)
        }
    })

    return (
        <div>
            <Modal isOpen={true} >

                <div style = {style.flexRow}>
                    <span style={style.title}>Lançamentos</span>
                    <input type="button" value="X" className="waves-effect waves-light btn red dark-4" onClick={handleClose}/>
                </div>
                <form onSubmit={handleFormSubmit}>
                    {_id !== undefined && <input  type="text" id="_id" disabled={true} placeholder="ID" value={_id} onChange={handleChangeFields} />}
                    <input  type="text" id="description" placeholder="Descrição" value={description} onChange={handleChangeFields} />
                    <input  type="text" id="Value" placeholder="value" value={value} onChange={handleChangeFields}/>
                    <input  type="text" id="category" placeholder="Category" value={category} onChange={handleChangeFields}/>
                    <input  type="date" id="datef" value={datef} onChange={handleChangeFields}/>
                    <label>
                        <input name="type" id="type" type="radio" value="+" checked={type === "+" && true} onChange={handleChangeFields}/>
                        <span>Receita</span>
                    </label>
                    <label>
                        <input name="type"  id="type" type="radio" value="-" checked={type === "-" && true} onChange={handleChangeFields}/>
                        <span>Despesa</span>
                    </label>
                

                    <div style={style.flexRow}>
                        <input type="submit" value="Save" className="waves-effect waves-light btn" />
                        
                    </div>
                    
                </form>
            </Modal>
        </div>
    )
}

const style = {
    "flexRow" : {
        "display" : "flex"
        ,"flexDirection" : "row"
        ,"alignItems":"center"
        ,"justifyContent" : "space-between"
        ,"marginBottom" : "40px"
    }
    ,"title" :{
        "fontSize":"1.3rem"
        ,"fontWeight" : "bold"
    }
    ,"flexStart" :{
        "justifyContent" : "flex-start"
    }
}
/*
                    <input  type="text" id="year" placeholder="Ano" value = {year} onChange={handleChangeFields}/>
                    <input  type="text" id="month" placeholder="Mês" value = {month} onChange={handleChangeFields}/>
                    <input  type="text" id="day" placeholder="Dia" value = {day} onChange={handleChangeFields}/>
                    <input  type="text" id="yearMonth" placeholder="Ano Mes" value={yearMonth} onChange={handleChangeFields}/>
                    <input  type="text" id="YearMonthDay"  placeholder="Ano Mes Dia" value={yearMonthDay} onChange={handleChangeFields}/>
                    
*/
