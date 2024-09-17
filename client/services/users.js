import { makeRequests } from "./makeRequests"

export function createUser({fname, lname, username, password, email}){
  return makeRequests(`/register`, {
    method: "POST",
    data: {fname, lname, username, password, email},
  })
}

export function checkUser({username, password}){
  return makeRequests(`/login`, {
    method: "POST",
    data: {username, password},
  })
}

export function getUser(){
  return makeRequests(`/users`, {
    method: "GET",
  })
}