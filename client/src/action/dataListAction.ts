import {FETCH_USER_DETAILS,DELETE_USER,FETCH_USER_DETAILS_ERROR} from '../types/types';

import axios from 'axios';
export const fetchDetails=(query:string)=>{
    interface DATA{
        avatar_url:string,
        login:string,
        public_gists:number,
        public_repos:number,
        url:string,
        followers:number
    }
    return function (dispatch){
        axios.get(`https://api.github.com/users/${query}`).then((response:any)=>{
            const data:DATA={
                avatar_url:response.data.url,
                login:response.data.login,
                public_gists:response.data.public_gists,
                public_repos:response.data.public_repos,
                url:response.data.url,
                followers:response.data.followers
            }
            dispatch({
                type:FETCH_USER_DETAILS,
                payload:data
            })
        }).catch((err)=>{
         dispatch({
             type:FETCH_USER_DETAILS_ERROR,
             payload:err
         })   
        })
    }
}

export const delteUser=(name:string)=>{
return function(dispatch){
    dispatch({
        type:DELETE_USER
    })
}
}