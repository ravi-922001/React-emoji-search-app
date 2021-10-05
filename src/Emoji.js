import React from 'react'
import './Emoji.css'

function Emoji(props) {
    return (
        <div className="box">
            <div>{props.name}</div>
            <div>{props.emoji}</div>
        </div>
    )
}

export default Emoji
