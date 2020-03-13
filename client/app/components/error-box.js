import Component from "@glimmer/component";


const getErrorTextForField = field => error => `${field}: ${error}`

const getErrorListForField = ([field, errors]) => errors.map(getErrorTextForField(field))

export default class ErrorBoxComponent extends Component {
  get errorList() {
    console.log(this.args.errors) //eslint-disable-line
    return Object.entries(this.args.errors)
      .map(getErrorListForField)
      .reduce((acc, currVal) => acc.concat(currVal), [])
  }
}
