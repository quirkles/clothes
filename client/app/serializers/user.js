import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class UserSerializer extends JSONAPISerializer {
  normalizeResponse(store, primaryModelClass, payload) {
    localStorage.setItem('jwt', payload.meta.token);
    return super.normalizeResponse(...arguments);
  }
}
