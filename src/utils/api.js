import axios from 'axios'
import fp from 'lodash/fp'

const API_URL = 'https://versity-app.herokuapp.com/api/'
const API_URL_DEV = 'http://localhost:3000/api/'

const API = process.env.NODE_ENV === 'development' ? API_URL_DEV : API_URL

// Initialize the axios config with the API endpoint and credentials.
const _axios = axios.create({
	baseURL: API,
	timeout: 4000,
	headers: {
		'Accept': 'application/json, text/plain',
		'Content-Type': 'application/json',
	},
	withCredentials: true,
})

/**
 * Composed function for filtering and encoding of URL params.
 */
const processParams = fp.flow(
	fp.omitBy(fp.isEmpty),
	fp.mapValues(value => encodeURIComponent(value))
)

/**
 * Composed functions for filtering of HTTP data params.
 */
const processRequest = fp.flow(
	fp.omitBy(fp.isEmpty)
)

/**
 * Sends a GET request to the endpoint specified in [url] with the data inside the [params] object
 * @param {string} url - The URL sub location endpoint.
 * @param {object} params - An object containing the data to be sent.
 * @returns {Promise} The promise of the request.
 */
export const get = (url, params) => {
	console.log(params);
	return _axios.get(url, {
		params: processParams(params),
	})
}

/**
 * Sends a POST request to the endpoint specified in [url] with the data inside the [params] object
 * @param {string} url - The URL sub location endpoint.
 * @param {object} params - An object containing the data to be sent.
 * @returns {Promise} The promise of the request.
 */
export const post = (url, data) => {
	return _axios.post(url, processRequest(data))
}

/**
 * Sends a PUT request to the endpoint specified in [url] with the data inside the [params] object
 * @param {string} url - The URL sub location endpoint.
 * @param {object} params - An object containing the data to be sent.
 * @returns {Promise} The promise of the request.
 */
export const put = (url, data) => {
	return _axios.put(url, processRequest(data))
}

/**
 * Sends a DELETE request to the endpoint specified in [url] with the data inside the [params] object
 * @param {string} url - The URL sub location endpoint.
 * @param {object} params - An object containing the data to be sent.
 * @returns {Promise} The promise of the request.
 */
export const del = (url, params) => {
	return _axios.delete(url, {
		params: processParams(params)
	})
}

export default {
	get, post, put, del,
}
