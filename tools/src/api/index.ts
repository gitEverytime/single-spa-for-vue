import {post,get} from "../axios/index.ts";
// let BASE_URL =  process.env.VUE_APP_BASEURL;
//
export const apiAddress = (p) => get(BASE_URL + '/selectact/query.jspx?resid=STATISTICS_CHECKTASK', p);
export const apiQuery = (p) => get('/selectact/query.jspx', p);