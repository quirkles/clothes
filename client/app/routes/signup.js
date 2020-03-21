import Route from '@ember/routing/route';
export default class SignupRoute extends Route {
  model() {
    const user = this.store.peekRecord('user', 'unauthenticated-user');
    if (user) {
      return user
    }
    return this.store.createRecord('user', {
      id: 'unauthenticated-user',
      username: 'quirkles',
      email: 'al.quirk@email.com',
      password: 'password',
      confirmPassword: 'password',
    })
  }
}
