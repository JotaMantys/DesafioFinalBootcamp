import React from 'react'

export default function ActionButton(properties) {
    const {tip,id,onActionClick} = properties
    const ActionClick = ()=>{
        onActionClick(id,tip)
    }

    return (
        <div>
            <span onClick={ActionClick} style={{"cursor":"pointer"}} className="material-icons" >{tip}</span>
        </div>
    )
}
