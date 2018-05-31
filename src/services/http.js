import axios from 'axios';

const URL = 'http://localhost:3000';

export function baseUrl() {
  return URL
}

export async function post(endpoint, payload){
  return await axios(`${URL}/${endpoint}`, {
    method: 'post',
    params: payload
  })
}

export async function get(endpoint, payload){
  return await axios(`${URL}/${endpoint}`, {
    method: 'get',
    params: payload
  })
}

export async function put(endpoint, payload){
  return await axios.put(`${URL}/${endpoint}`, payload)
}

export async function del(endpoint, payload){
  return await axios.del(`${URL}/${endpoint}`, payload)
}

export default {
  get,
  post,
  put,
  del
}