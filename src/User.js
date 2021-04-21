import React from 'react';
import axios from 'axios';
import { useAsync } from 'react-async';

async function getUser({id}) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.data;
}

function User({ id }) {

    const {
        data: user,
        error,
        loading
    } = useAsync({
        promiseFn: getUser,
        id,
        watch: id,
    });

    if (loading) return <div>로딩중</div>
    else if (error) return <div>에러 발생</div>
    else if (!user) return null

    return (<div>
        <h2>{user.username}</h2>
        <p><b>E-mail : </b> {user.email}
        </p></div>)
}

export default User;