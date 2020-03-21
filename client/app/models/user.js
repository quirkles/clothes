import Model, { attr } from '@ember-data/model';

// eslint-disable-next-line no-useless-escape
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const host = 'http://localhost:5000';

const handleResponse = response => {
  if (response.ok && response.status && response.status < 400 && response.status >= 200) {
    return response.json()
  } else {
    return response
      .json()
      .then(errs => Promise.reject(errs))
  }
};

export default class user extends Model {
  @attr('string') username;
  @attr('string') email;
  @attr('string') password;
  @attr('string') confirmPassword;

  attemptLogin() {
    return fetch(`${host}/login`, {
      method: 'POST',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/vnd.api+json'
      },
      body: JSON.stringify({
        data: {
          attributes: {
            username: this.username,
            password: this.password,
          },
          type: 'users',
        }
      })
    })
      .then(handleResponse)
  }

  get signupErrors() {
    return {
      username: [
        ['minlength_6', this.username.length < 6],
      ],
      email: [
        ['isEmail', !emailRegex.test(this.email)],
      ],
      password: [
        ['minlength_6', this.password.length < 6],
      ],
      confirmPassword: [
        ['matches_password', this.confirmPassword !== this.password]
      ]
    }
  }

  get loginErrors() {
    return {
      username: [
        ['minlength_6', this.username.length < 6],
      ],
      password: [
        ['minlength_6', this.password.length < 6],
      ],
    }
  }

  get canAttemptSignup() {
      return ([]
      .concat(Object.values(this.signupErrors))
      .flat()
      .filter(([, isInvalid]) => isInvalid)
      .length === 0)
  }

  get canAttemptLogin() {
      return ([]
      .concat(Object.values(this.loginErrors))
      .flat()
      .filter(([, isInvalid]) => isInvalid)
      .length === 0)
  }

  get hasSignupErrors() {
      return !this.canAttemptSignup
  }

  get hasloginErrors() {
    return !this.canAttemptLogin
  }
}
