import React from 'react';
import "./UserCard.css";

const UserCard = ({name, image, style, des})=>{
    return (
        <div className='user-details' style={style}>
            <p>{name}</p>
            <img src={image} alt={name} />
            <p>{des}</p>
        </div>
    )
}

export default UserCard
