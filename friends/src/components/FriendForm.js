import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth.js';

const FriendForm = ({ addFriend }) => {
    const [friend, setFriend] = useState({name: '', age: '', email: ''});

    const handleChange = event => {
        setFriend({...friend, [event.target.name]: event.target.value});
    }

    const handleSubmit = event => {
        event.preventDefault();
        addFriend(friend);
        setFriend({name: '', age: '', email: ''});
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name
                <input name="name" placeholder="Name" value={friend.name} onChange={handleChange} />
            </label>
            <label>
                Age
                <input name="age" placeholder="Age" value={friend.age} onChange={handleChange} />
            </label>
            <label>
                email
                <input name="email" placeholder="email" value={friend.email} onChange={handleChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default FriendForm;