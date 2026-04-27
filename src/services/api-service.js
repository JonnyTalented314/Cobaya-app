import axios from 'axios'
// import { getUserToken } from 'helpers/storage'

export const API_BASE = 'https://my.coyaba.app/v1'
export const UPLOAD_URL = API_BASE + '/upload'

/**
   * @param {string} url
   * @param {import('axios').AxiosRequestConfig} extra
   * @returns {Promise}
   */

async function request (url, extra) {
  const headers = {}
  // const token = getUserToken()
  // if (token) {
  //   headers.Authorization = 'Bearer ' + token
  // }

  return axios({
    baseURL: API_BASE,
    url,
    headers,
    ...extra
  })
    .catch(err => {
      if (err?.response?.data?.message) {
        err.message = err.response.data.message
      }
      throw err
    })
}

export async function sendEmail (data) {
  return request('/contact/sendEmail', {
    method: 'POST',
    data
  })
    .then(res => res.data)
}
