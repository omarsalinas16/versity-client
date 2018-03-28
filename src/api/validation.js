const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const nameRegex = /[A-Z]\w+/
const userRegex = /[a-zA-Z0-9]{3,}/

const validateEmail = (email) => email && emailRegex.test(email)
const validateName = (name) => name && nameRegex.test(name)
const validateUsername = (username) => username && userRegex.test(username)

export default {
	validateEmail,
	validateName,
	validateUsername,
}
