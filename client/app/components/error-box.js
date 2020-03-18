import Component from "@glimmer/component";

const readableFields = {
  username: 'username',
  email: 'email',
  password: 'password',
  confirmPassword: 'confirm password',
};

const readableErrors = {
  minlength_6: 'must be at least 6 characters.',
  isEmail: 'must be a valid email.',
  matches_password: 'must match password field.',
};

const getErrorTextForField = field => error => `${readableFields[field]} field ${readableErrors[error[0]]}`;

const getErrorListForField = ([field, errors]) => errors
  .filter(([_, isInvalid]) => isInvalid)
  .map(getErrorTextForField(field));

export default class ErrorBoxComponent extends Component {
  get errorList() {
    return Object.entries(this.args.errors)
      .map(getErrorListForField)
      .reduce((acc, currVal) => acc.concat(currVal), [])
  }
}
