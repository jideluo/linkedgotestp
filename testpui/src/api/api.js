import axios from 'axios';


export const test = 'http://127.0.0.1:8000';

export const url  = 'http://127.0.0.1';


// 登录
export const requestLogin = params => { return axios.post(`${test}/api/user/login`, params).then(res => res.data); };


