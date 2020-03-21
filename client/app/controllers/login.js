import Controller from '@ember/controller';
import { action } from '@ember/object';
import {tracked} from "@glimmer/tracking";

export default class LoginController extends Controller {
  @tracked hasSubmitted = false;

  get shouldShowErrorBox() {
    return this.model.hasLoginErrors && this.hasSubmitted
  }

  @action
  submit(){
    this.hasSubmitted = true;
    if(this.model.canAttemptLogin) {
      const self = this;
      this.model
        .attemptLogin()
        .then((response) => {
          self.hasSubmitted = false;
          localStorage.setItem('jwt', response.meta.token);
          self.store.push({
            data: {
              id: response.data.id,
              type: 'user',
              attributes: response.data
            }
          });
          self.model.unloadRecord();
          self.transitionToRoute('home')
        })
        .catch(err => {
          console.error(err)
        })
    }
  }
}
