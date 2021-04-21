import React, { useState } from 'react';
import User from './User';
import { getUsers, useUsersDispatch, useUserState } from './UsersContext';

function Users() {

    const [userId, setUserId] = useState(null);
    const state = useUserState();
    const dispatch = useUsersDispatch();

    const fetchData = () => {
        getUsers(dispatch);
    }
    
    const { loading, data: users, error } = state.users;

    if(loading) {
        return <div>로딩중</div>
    } else if (error) {
        return <div>에러발생</div>
    } else if (!users) {
        return <button onClick={fetchData}>불러오기</button>;
    } 

    return <><ul>
        {users.map(user => <li key={user.id} onClick={() => setUserId(user.id)}>
            {user.username} ({user.name})
        </li>)}
        <button onClick={fetchData}>다시 불러오기</button>
        {userId && <User id={userId} />}
    
    </ul></>;

}

export default Users;