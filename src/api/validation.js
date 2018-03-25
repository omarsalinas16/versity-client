const userRegex = /[a-zA-Z]+\w+\S[^0-9\W]/
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const validateEmail = (email) => email && emailRegex.test(email)
const validateUsername = (username) => username && userRegex.test(username)

export default {
	validateEmail,
	validateUsername
}
