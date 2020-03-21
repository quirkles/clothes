import JSONAPIAdapter from '@ember-data/adapter/json-api';

const host = 'http://localhost:5000';

const handleResponse = response => {
  if (response.ok && response.status && response.status < 400 && response.status >= 200) {
    return response.json()
  } else {
    return response
      .json()
      .then(errs => Promise.reject(errs))
  }
};

export default class AuthAdapter extends JSONAPIAdapter {

  attemptSignup(signupParams){
    return fetch(`${host}/users`, {
      method: 'POST',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/vnd.api+json'
      },
      body: JSON.stringify({
        data: {
          attributes: signupParams,
          type: 'users',
        }
      })
    })
      .then(handleResponse)
  }
}
