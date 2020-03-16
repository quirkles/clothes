import Model, { attr } from '@ember-data/model';

// eslint-disable-next-line no-useless-escape
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export default class user extends Model {
  @attr('string') username;
  @attr('string') email;
  @attr('string') password;
  @attr('string') confirmPassword;

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
    return !this.canAttemptSignup
  }
}
