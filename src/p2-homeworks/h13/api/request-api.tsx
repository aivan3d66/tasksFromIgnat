import axios from "axios";

const url = 'https://neko-cafe-back.herokuapp.com/auth/test';

// export async function postData(success: boolean) {
//   const data = {success: success}
//   const response = await fetch(url, {
//     method: 'POST',
//     body: JSON.stringify(data)
//   });
//   return await response.json();
// }

export const instance = axios.create({
  baseURL: url,
})

export const axiosPostData = {
  postRequest(success: boolean) {
    return instance.post(url, {success})
  }
}