var {Store, msg, Validator} = require('iflux');


///////////////Store//////////////////
appStore = module.exports = Store({
  username: '',
  password: '',
  confirm: '',
  email: '',
  qq: ''
});



/////////////validator///////////////
var validator = Validator(appStore, {
  username: {
    required: true,
    message: {
      required: 'username is required'
    }
  },
  password: {
    required: true,
    message: {
      required: 'password is required'
    }
  },
  confirm: {
    required: true,
    equal: 'password',
    message: {
      required: 'confirm password is required.',
      equal: 'confirm password should be equal password'
    }
  },
  email: {
    required: true,
    email: true,
    message: {
      required: 'email is required.',
      email: 'email is invalid'
    }
  },
  qq: {
    required: true,
    qq: true,
    message: {
      required: 'qq is required.',
      qq: 'qq is invalid.'
    }
  }
});

//在调用isValid之前可以动态的添加自定义规则，for example
//equal is rule name, callback is rule method.
validator.rule('equal', function(param, val) {
  console.log(param, val);
  return appStore.data().get(param) === val;
})


////////////////form field change///////////
msg.on('fieldChange', function(field) {
  appStore.cursor().set(field.name, field.value);
});


////////////////blur validator//////////////
msg.on('validate', function(val) {

  appStore.cursor().set('username', val);
  validator.isValid('username');
});


/////////////login/////////////////
msg.on('login', function() {
  var result = validator.isValid();
  if (!result) {
    return false;
  } else {
    console.log('yes! submit success');
  }
});
