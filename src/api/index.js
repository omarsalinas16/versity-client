import buildUrl from 'build-url'

const API_URL = 'https://versity-app.herokuapp.com/api/'
const API_URL_DEV = 'http://localhost:3000/api/'

export const API = process.env.NODE_ENV === 'development' ? API_URL_DEV : API_URL

export const apiGet = (
	path = '',
	data = {},
	onSuccess = (data) => {},
	onError = (error) => {},
	onFatal = (error) => {}
) => {
	const queryParams = {}

	Object.keys(data).filter(value => value).forEach(key => {
		if (data[key]) queryParams[key] = encodeURIComponent(data[key])
	})

	const url = buildUrl(API, { path, queryParams })

	fetch(url.toString())
		.then(data => data.json())
		.then(parsed => {
			if (parsed.status === 200) {
				onSuccess(parsed.data)
			} else {
				onError(parsed.error)
			}
		})
		.catch(error => onFatal(error))
}
