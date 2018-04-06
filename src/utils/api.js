import axios from 'axios'
import fp from 'lodash/fp'

const API_URL = 'https://versity-app.herokuapp.com/api/'
const API_URL_DEV = 'http://localhost:3000/api/'

const API = process.env.NODE_ENV === 'development' ? API_URL_DEV : API_URL

const _axios = axios.create({
	baseURL: API,
	timeout: 4000,
	headers: {
		'Accept': 'application/json, text/plain',
		'Content-Type': 'application/json',
	},
	withCredentials: true,
})

const processParams = fp.flow(
	fp.omitBy(fp.isEmpty),
	fp.mapValues(value => encodeURIComponent(value))
)

const processRequest = fp.flow(
	fp.omitBy(fp.isEmpty)
)

export const get = (url, params) => {
	return _axios.get(url, {
		params: processParams(params),
	})
}

/**
 * @param {String} url The api endpoint subpath
 * @param {Object} data The request data structure object
 * @example
 * post('register', {
 *   firstName: 'John',
 *   lastName: 'Doe',
 *   username: 'j.doe',
 * })
 * .then(data => { })
 * .catch(error => { })
 */
export const post = (url, data) => {
	return _axios.post(url, processRequest(data))
}

export const put = (url, data) => {
	return _axios.put(url, processRequest(data))
}

export const del = (url, params) => {
	return _axios.delete(url, {
		params: processParams(params)
	})
}

export default {
	get, post, put, del,
}
