const url = 'https://neko-cafe-back.herokuapp.com/auth/test';

export const createRequestApi = async () => {
  let response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({success: true})
  });
  try {
    return await response.json();
  } catch (e) {
    console.log(e);
  }
}