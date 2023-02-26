import React from 'react'
import { useSearchParams } from 'react-router-dom'

export const Sort = ({setOrder,orderval}) => {
    const handleRadio=(e)=>{
         setOrder(e.target.value)
    }
    return (
        <>
            <h3>Sort</h3>
            <div onChange={handleRadio}>
                <input type='radio' name='sort' value="asc" defaultChecked={orderval=='asc'}/>
                <label> High to Low</label>
                <br/>
                <input type='radio' name='sort' value="desc" defaultChecked={orderval=='desc'}/>
                <label> Low to High</label>
            </div>
        </>
    )
}