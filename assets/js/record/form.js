var Immutable = require('immutable');


/**
 * 封装form类型
 */
var Form = Immutable.Record({
  username: '',
  password: '',
  confirm: '',
  email: '',
  qq: '',
  fieldErrors: Immutable.Map({})
});


module.exports = Form;
