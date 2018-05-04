/**
 * Helper module that wraps axios and facilitates API calls as well as error handling. All API request function receive and return the same data types. For example, to realize a POST request:
 * @module
 * @example
 * post('api/path', {
 * 	key: "value"
 * })
 * .then(data => {
 * 	# Data received in this block
 * })
 * .cath(error => {
 * 	# Any error or response with code over 299 (server or user defined) is catched here
 * })
 */

import axios from 'axios'
import fp from 'lodash/fp'

const API_URL = 'https://versity-app.herokuapp.com/api/'
const API_URL_DEV = 'http://localhost:3000/api/'

/**
 * The API endpoint url
 * @const
 */
const API = process.env.NODE_ENV === 'development' ? API_URL_DEV : API_URL

/**
 * The configured axios object
 * @const
 */
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
 * Composed function for filtering and encoding of URL params
 * @function
 * @param {Object} data The data params to process
 * @returns {Object} The processed object
 */
const processParams = fp.flow(
	fp.omitBy(fp.isEmpty),
	fp.mapValues(value => encodeURIComponent(value))
)

/**
 * Composed functions for filtering of HTTP data params
 * @function
 * @param {Object} data The data request to process
 * @returns {Object} The processed object
 */
const processRequest = fp.flow(
	fp.omitBy(fp.isEmpty)
)

/**
 * Sends a GET request to the endpoint specified in [url] with the data inside the [params] object
 * @function
 * @param {string} url - The URL sub location endpoint
 * @param {object} params - An object containing the data to be sent
 * @returns {Promise} The promise of the request
 */
export const get = (url, params) => {
	return _axios.get(url, {
		params: processParams(params),
	})
}

/**
 * Sends a POST request to the endpoint specified in [url] with the data inside the [params] object
 * @function
 * @param {string} url - The URL sub location endpoint
 * @param {object} params - An object containing the data to be sent
 * @returns {Promise} The promise of the request
 */
export const post = (url, data) => {
	return _axios.post(url, processRequest(data))
}

/**
 * Sends a PUT request to the endpoint specified in [url] with the data inside the [params] object
 * @function
 * @param {string} url - The URL sub location endpoint
 * @param {object} params - An object containing the data to be sent
 * @returns {Promise} The promise of the request
 */
export const put = (url, data) => {
	return _axios.put(url, processRequest(data))
}

/**
 * Sends a DELETE request to the endpoint specified in [url] with the data inside the [params] object
 * @function
 * @param {string} url - The URL sub location endpoint
 * @param {object} params - An object containing the data to be sent
 * @returns {Promise} The promise of the request
 */
export const del = (url, params) => {
	return _axios.delete(url, {
		params: processParams(params)
	})
}

export default {
	get, post, put, del,
}
