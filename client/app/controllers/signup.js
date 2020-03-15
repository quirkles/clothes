import Controller from '@ember/controller';
import { action } from '@ember/object';
import {tracked} from "@glimmer/tracking";
// import {tracked} from "@glimmer/tracking";

const persistToken = resp => {
  console.log(resp) //eslint-disable-line
  return resp
};

export default class SignupController extends Controller {
  @tracked hasSubmitted = false;

  get shouldShowErrorBox() {
    return this.model.hasSignupErrors && this.hasSubmitted
  }

  @action
  submit(){
    this.hasSubmitted = true;
    if(this.model.canAttemptSignup) {
      this.model.save()
        .then(persistToken)
        .catch(err => {
          console.error(err)
        })
    } else {
      console.log(this.model.signupErrors)
    }
  }
}
