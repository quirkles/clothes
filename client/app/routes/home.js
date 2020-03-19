import Route from '@ember/routing/route';
export default class LoginRoute extends Route {
  model() {
    console.log(this.store.peekAll('user'))
  }
}
