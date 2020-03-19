import Controller from '@ember/controller';
import { action } from '@ember/object';
import {tracked} from "@glimmer/tracking";

export default class SignupController extends Controller {
  @tracked hasSubmitted = false;

  get shouldShowErrorBox() {
    return this.model.hasSignupErrors && this.hasSubmitted
  }

  @action
  submit(){
    this.hasSubmitted = true;
    if(this.model.canAttemptSignup) {
      const self = this;
      this.store
        .createRecord('user', this.model.serialize().data.attributes)
        .save()
        .then(() => {
          self.hasSubmitted = false;
          self.model.unloadRecord();
          self.transitionToRoute('home')
        })
        .catch(err => {
          console.error(err)
        })
    }
  }
}
