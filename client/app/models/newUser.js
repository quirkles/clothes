import Model, { attr } from '@ember-data/model';

export default class user extends Model {
  @attr('string') username;
  @attr('string') email;
  @attr('string') password;
  @attr('string') confirmPassword;
}
