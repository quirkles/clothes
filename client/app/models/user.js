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
        ['minlength_6', this.username.length < 5],
      ],
      email: [
        ['isEmail', !emailRegex.test(this.email)],
      ],
      password: [
        ['minlength_6', this.password.length < 5],
      ],
      confirmPassword: [
        ['matches_password', this.confirmPassword !== this.password]
      ]
    }
  }

  get canAttemptSignup() {
      return ([]
      .concat(Object.values(this.signupErrors))
      .filter((field, isInvalid) => isInvalid)
      .length) === 0
  }
}
