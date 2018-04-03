const email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const name = /[A-Z]\w+/

const username = /[a-zA-Z][a-zA-Z0-9]{2,}/

const validateEmail = (value) => value && email.test(value)
const validateName = (value) => value && name.test(value)
const validateUsername = (value) => value && username.test(value)

export default {
	email,
	name,
	username,
	validateEmail,
	validateName,
	validateUsername,
}
