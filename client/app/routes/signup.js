import Route from '@ember/routing/route';
export default class SignupRoute extends Route {
  model() {
    return this.store.createRecord('user', {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    })
  }
}
