import { Actor, Action } from 'iflux2'

export default class UserActor extends Actor {
  defaultState() {
    return {
      username: '',
      password: '',
      confirm: '',
      email: '',
      qq: ''
    }
  }

  @Action('changeValue')
  changeValue(state, {name, value}) {
    return state.set(name, value)
  }
}
