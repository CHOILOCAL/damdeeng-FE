import React, { useState } from 'react';
import axios from 'axios';
import {useAsync} from 'react-async';
import User from './User';

async function getUsers() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/');
    return response.data;
}
function Users() {

    const [userId, setUserId] = useState(null);
    const { data: users, error, loading, reload, run } = useAsync({
        deferFn: getUsers
    });

    if(loading) {
        return <div>로딩중</div>
    } else if (error) {
        return <div>에러발생</div>
    } else if (!users) {
        return <button onClick={reload}>불러오기</button>;
    } 

    return <><ul>
        {users.map(user => <li key={user.id} onClick={() => setUserId(user.id)}>
            {user.username} ({user.name})
        </li>)}
        <button onClick={reload}>다시 불러오기</button>
        {userId && <User id={userId} />}
    
    </ul></>;

}

export default Users;