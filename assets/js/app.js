var React = require('react');

var StoreMix = require('iflux/mixins/store-mixin');
var msg = require('iflux/msg');
var appStore = require('./store');
var Form = require('./components/form');
var FormField = require('./components/form-field');
var ButtonField = require('./components/button-field');


/**
 * app
 */
var App = React.createClass({
  mixins: [StoreMix(appStore)],


  /**
   * virtualdom
   */
  render() {
    var store = appStore.data();
    var userNameError = store.getIn(['fieldErrors', 'username']);
    var passwordError = store.getIn(['fieldErrors', 'password']);
    var confirmError = store.getIn(['fieldErrors', 'confirm']);
    var emailError = store.getIn(['fieldErrors', 'email']);
    var qqError = store.getIn(['fieldErrors', 'qq']);


    console.log('app is rending...');

    return (
      <Form title={'user register'}>
        {/* username */}
        <FormField error={userNameError} label="username:" required={true}>
          <input type="text" name="username" value={store.get('username')} onChange={this._handleChange} onBlur={this._validateUserName}/>
        </FormField>

        {/* password */}
       <FormField error={passwordError} label={'password:'} required={true}>
        <input type="password" name="password" value={store.get('password')} onChange={this._handleChange}/>
       </FormField>

       {/* confirm password*/}
       <FormField error={confirmError} label={' confirm password:'} required={true}>
        <input type="password" name="confirm" value={store.get('confirm')} onChange={this._handleChange}/>
       </FormField>

       {/* email */}
       <FormField error={emailError} label={'email:'} required={true}>
        <input type="email" name="email" value={store.get('email')} onChange={this._handleChange}/>
       </FormField>

       {/* qq */}
       <FormField error={qqError} label={'qq:'} required={true}>
        <input type="text" name="qq" value={store.get('qq')} onChange={this._handleChange}/>
       </FormField>

       <ButtonField>
        <input type="submit" value="login" onClick={this._handleLogin}/>
       </ButtonField>
      </Form>
    );
  },


  /**
   * field change
   */
  _handleChange(e) {
    var name = e.target.name;
    var value = e.target.value;

    console.log('change field:=>', name, value);

    msg.emit('fieldChange', {name: name, value: value});
  },


  /**
   * 校验某一个字段
   */
  _validateUserName(e) {
    var value = e.target.value;
    msg.emit('validate', value);
  },


  /**
   * login(form submit)
   */
  _handleLogin(e) {
    e.preventDefault();
    msg.emit('login');
  }
});


/**
 * render dom
 */
React.render(<App/>, document.body);
