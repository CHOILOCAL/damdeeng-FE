import React, { createContext, useReducer, useContext } from 'react';


import * as api from './api'
import createAsyncDispatcher, { initialAsyncState, createAsyncHandler } from './asyncActionUtils';


const initalState = {
    users: initialAsyncState,
    user: initialAsyncState
}

const usersHandler = createAsyncHandler('GET_USERS', 'users');
const userHandler = createAsyncHandler('GET_USER', 'user');

function usersReducer(state, action) {
    switch (action.type) {
        case 'GET_USERS':
        case 'GET_USERS_SUCCESS':
        case 'GET_USERS_ERROR':
            return usersHandler(state, action);
        case 'GET_USER':
        case 'GET_USER_SUCCESS':
        case 'GET_USER_ERROR':
            return userHandler(state, action)
        default:
            throw new Error('Unhandled action type', action.type);
    }
}

// context
// state, dispatch
const UserStateContext = createContext(null);
const UsersDispatchContext = createContext(null);

export function UsersProvider({ children }) {
    const [state, dispatch] = useReducer(usersReducer, initalState);

    return (
        <UserStateContext.Provider value={state}>
            <UsersDispatchContext.Provider value={dispatch} >
                {children} 
            </UsersDispatchContext.Provider>
        </UserStateContext.Provider>
    )
}

export function useUserState() {
    const state = useContext(UserStateContext);
    if (!state) {
        throw new Error(`Cannot find UserProvider`);
    }
    return state;
}

export function useUsersDispatch() {
    const dispatch = useContext(UsersDispatchContext);
    if (!dispatch) {
        throw new Error(`Cannot find UsersDispatchContext`);
    }
    return dispatch;
}

export const getUsers = createAsyncDispatcher('GET_USERS', api.getUsers);
export const getUser = createAsyncDispatcher('GET_USER', api.getUser);
