import axios from "axios"

const baseAPI = axios.create({
  baseURL: '//jsonplaceholder.typicode.com'
})

export const getUsers = async () => {
  const res = await baseAPI.get(`/users`)
  return res.data
}

export const postUsers = (user) => {
  baseAPI.post('/', user)
}

export const updateUser = () => {
  baseAPI.patch()
}