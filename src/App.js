import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Friend from './components/Friend/Friend';
import { useState } from 'react';
import users from '../src/fakeData/users';
import FriendRequest from './components/FriendRequest/FriendRequest';

function App() {
  const [user, setUser] = useState(users);
  const [request, setRequest] = useState([]);
  console.log(user);

  const handleOnClick = (addedFriend) => {
    console.log(addedFriend);
    const updateReq = [...request, addedFriend];
    setRequest(updateReq);
  }
  const totalSalary = request.reduce((total, friend) => total + friend.salary, 0);
  const reqAreaStyle = { borderLeft: '1px solid lightgray', width: '30%', textAlign: 'center' }
  const bodyStyle = { display: 'flex', justifyContent: 'space-between' }
  return (
    <div>
      <Header></Header>
      <div style={bodyStyle}>
        <div style={{ width: '65%' }}>
          {
            user.map(user => <Friend user={user} handleOnClick={handleOnClick}></Friend>)
          }
        </div>
        <div style={reqAreaStyle}>
          <h2>Friend Request Area</h2>
          <p>Total Request : {request.length}</p>
          <p><small>Total salary: {totalSalary}</small></p>
          <hr />
          {
            request.map(singleRequest => <FriendRequest request={singleRequest}></FriendRequest>)
          }
        </div>
      </div>
    </div>

  );
}

export default App;
