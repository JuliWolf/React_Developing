import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className='UserOutput'>
            <p>UserName: {props.userName}</p>
            <p>Second paragraph</p>
        </div>
    )
}

export default userOutput;