import {createContext} from 'react'
export const AuthContext =createContext(
    {
        isLoggedIn:false,
        // userId:null,
        token:null,
        isRegistered:null,
        // imageUrl:null,
        logIn:()=>{},
        logOut:()=>{}
    }
)