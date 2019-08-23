import React, { useState, useEffect } from 'react';
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth.js';
import FriendForm from './FriendForm.js';

const Friends = props => {
    const [friendsList, setFriendsList] = useState([]);

    useEffect(() => {
        axiosWithAuth().get('http://localhost:5000/api/friends')
            .then(res => {
                console.log('axios get', res);
                setFriendsList(res.data);
            })
            .catch(error => console.log(error.response));
    }, [])

    const addFriend = friend => {
        axiosWithAuth().post('http://localhost:5000/api/friends', friend)
            .then(res => {
                console.log(res);
                setFriendsList([...friendsList, friend]);
            })
            .catch(err => console.log(err.response));
    }

    return (
        <div>
            <h2>Friends</h2>
            {friendsList.map(friend => {
                return <div key={friend.id}>{friend.name}</div>
            })}
            <h2>Add Friend</h2>
            <FriendForm addFriend={addFriend} />
        </div>
    );
}

export default Friends;