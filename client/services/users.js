import { makeRequests } from "./makeRequests"

export function createUser({fname, lname, username, password, email}){
  return makeRequests(`/register`, {
    method: "POST",
    data: {fname, lname, username, password, email},
  })
}