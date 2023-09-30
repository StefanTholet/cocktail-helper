export const LOGIN_INPUTS = [
  { name: 'email', label: 'Email', type: 'text' },
  { name: 'password', label: 'Password', type: 'paswword' }
]

export const FORM_INITIAL_STATE = {
  email: '',
  password: ''
}

const LOGIN_TITLE = 'Login'
const SIGN_UP_TITLE = 'Sign up'

export const TITLE_MAPPER = {
  login: LOGIN_TITLE,
  'sign-up': SIGN_UP_TITLE
}
