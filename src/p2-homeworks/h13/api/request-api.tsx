import axios from "axios";

const url = 'https://neko-cafe-back.herokuapp.com/auth/test';

export const instance = axios.create({
  baseURL: url,
})

export const axiosPostData = {
  postRequest(success: boolean) {
    return instance.post(url, {success})
  }
}