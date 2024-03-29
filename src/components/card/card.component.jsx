import React from 'react'

import './card.styles.css';
export const Card = (props) => (
    <div className = 'card-container' >
        <img alt = "monsters" src = {`https://robohash.org/${props.monster.id}&size=180x180`}/>
        <h1>{props.monster.name}</h1>
        <p>{props.monster.email}</p>
    </div>
)