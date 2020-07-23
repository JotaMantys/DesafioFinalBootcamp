import React from 'react'

export default function SearchBar(properties) {
    const {text,textChange,openModal} = properties

  

    return (
        <div style={{
            'display':'flex'
            ,'flexDirection':'row'}}>
                <input type="button" value="Novo Lançamento" className="waves-effect waves-light btn" onClick={openModal}/>
             <div>
                <input  type="text" 
                        id="Search" 
                        value={text}
                        onChange={textChange}
                        placeholder="Filtro" />
                </div>
        </div>
    )
}
