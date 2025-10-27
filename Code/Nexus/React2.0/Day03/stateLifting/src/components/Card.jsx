import {React,useState }from 'react';
import './Card.css'

const Card = (props) =>{
    return (
        <div className='Card'>
            <h1>Here is Your Text : {props.name}</h1>
            <input type='text' onChange={(e)=>{props.setName(e.target.value)}} />
        </div>
    )
}

export default Card
