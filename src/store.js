import { Store } from 'iflux2'
import UserActor from './actor/user-actor'

export default class AppStore extends Store {
  constructor(props) {
    super(props)
    window.store = this
  }

  bindActor() {
    return [
      new UserActor,
    ]
  }

  //;;;;;;;;;;;;;;;;handle action;;;;;;;;;;;;;;;;;;;;
  changeValue = (name, value) => {
    this.dispatch('changeValue', {name, value})
  };

}
