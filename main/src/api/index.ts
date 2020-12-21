import {post,get} from "../axios/index.ts";
// let BASE_URL =  process.env.VUE_APP_BASEURL;
//
export const apiAddress = (p) => get('/system/plains.jspx?sid=VXI_FSAFETY', p);
export const apiLogin = (p) => post('/logonact/login.jspx', p);
export const apiPlains = (p) => post('/system/plains.jspx', p);