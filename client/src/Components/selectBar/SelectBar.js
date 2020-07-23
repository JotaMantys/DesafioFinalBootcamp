import React from 'react';
import {getMonthName, leftPad} from '../../helpers/dateTimeHelpers.js';

export default function SelectBar(properties) {
    const { arrDates,currDate,handleChange,IndexChange} = properties
    
    const btCl = (event)=>{
        
        const select = document.querySelector("#anoMes")
        //console.log(select.value)

        if(event.target.value === ">"){
            select.selectedIndex ++;
            IndexChange(select.value)//console.log(select.selectedIndex);
        }else{
            select.selectedIndex --;
            IndexChange(select.value)
           // console.log(select.selectedIndex);
        }
        
        

    }

    return (
            

            <div style={{
                'display':'flex'
                ,'flexDirection':'collumn'
                
            }}>
                <input type="button" value="<" onClick={btCl} className="waves-effect waves-light btn"/>              
                <select id="anoMes" value={currDate} onChange={handleChange} className="browser-default">
                    {arrDates.map((item)=>{
                        return <option  key={`${item.ano}-${leftPad(item.mes)}`} value={`${item.ano}-${leftPad(item.mes)}`}>{`${item.ano}-${getMonthName(item.mes)}`}</option>
                    })}
                </select>
                <input type="button" value=">" onClick={btCl} className="waves-effect waves-light btn"/>
            </div>
        
    );
}
