import Controller from '@ember/controller';
import { action } from '@ember/object';
import {tracked} from "@glimmer/tracking";

export default class SignupController extends Controller {
  @tracked hasSubmitted = false;

  get shouldShowErrorBox() {
    return this.model.hasLoginErrors && this.hasSubmitted
  }

  @action
  submit(){
    this.hasSubmitted = true;
    if(this.model.canAttemptLogin) {
      const self = this;
      this.model.save()
        .then(() => {
          self.transitionToRoute('home')
        })
        .catch(err => {
          console.error(err)
        })
    }
  }
}
