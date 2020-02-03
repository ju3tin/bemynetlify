import axios from "axios"

export const axiosWithAuth = () => {
  return axios.create({
    // config object
    baseURL: "https://anywhere-fitness-backend.herokuapp.com/api",
    headers: {
      Authorization: localStorage.getItem("token")
    }
  })
}
