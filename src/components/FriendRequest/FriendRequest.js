import React from 'react';
import './FriendRequest.css'

const FriendRequest = (props) => {
    const {name, phone, salary, img} = props.request;
    return (
        <div>
            <div className='body'>
                <img style = {{height:'60px'}}src={img} alt=""/>
                <div className="requestItem">
                    <h5>{name}</h5>
                    <p>Phone : {phone}</p>
                    <p>Salary: {salary}</p>
                </div>
                <div className = 'button'>
                    <button>Confirm</button>
                </div>
            </div>
        </div>
    );
};

export default FriendRequest;