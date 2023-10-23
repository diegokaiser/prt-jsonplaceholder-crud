import axios from "axios"

const baseAPI = axios.create({
  baseURL: '//jsonplaceholder.typicode.com'
})

export const getUsers = async () => {
  const res = await baseAPI.get(`/users`)
  return res.data
}

export const createUser = (user) => {
  baseAPI.post(`/users`, user)
}

export const putUser = (id, user) => {
  baseAPI.put(`/users/${id}`, user)
}

export const patchUser = (id, user) => {
  baseAPI.patch(`/users/${id}`, user)
}

export const deleteUser = (id) => {
  baseAPI.delete(`/users/${id}`)
}