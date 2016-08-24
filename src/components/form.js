import React, { Component } from 'react'
import { Relax } from 'iflux2'
import FormField from './form-field'
import Button from './button-field'
import {validatorQL} from '../ql'
const noop = () => {}

@Relax
export default class Form extends Component {
  static defaultProps = {
    username: '',
    password: '',
    confirm: '',
    email: '',
    qq: '',
    validator: validatorQL,
    changeValue: noop
  };

  render() {
    const {
      username,
      password,
      confirm,
      email,
      qq,
      changeValue
    } = this.props;

    return (
      <fieldset>
        <legend>{'user profile'}</legend>
        <form
          onChange={e => changeValue(e.target.name, e.target.value)}>
          <table>
            <tbody>
            {/* username */}
            <FormField error={this._getErrorInfo('username')} label="username:" required={true}>
              <input
                type="text"
                name="username" value={username}
                //onChange={this._handleChange}
                //onBlur={this._validateUserName}
                />
            </FormField>

            {/* password */}
             <FormField error={this._getErrorInfo('password')} label={'password:'} required={true}>
              <input type="password" name="password" value={password} onChange={this._handleChange}/>
             </FormField>

             {/* confirm password*/}
             <FormField error={this._getErrorInfo('confirm')} label={' confirm password:'} required={true}>
              <input type="password" name="confirm" value={confirm} onChange={this._handleChange}/>
             </FormField>

             {/* email */}
             <FormField error={this._getErrorInfo('email')} label={'email:'} required={true}>
              <input type="email" name="email" value={email} onChange={this._handleChange}/>
             </FormField>

             {/* qq */}
             <FormField error={this._getErrorInfo('qq')} label={'qq:'} required={true}>
              <input type="text" name="qq" value={qq} onChange={this._handleChange}/>
             </FormField>

             <Button>
              <input type="submit" value="login" onClick={this._handleLogin}/>
              <input type="button" value="reset" onClick={this._handleReset}/>
             </Button>
            </tbody>
          </table>
        </form>
      </fieldset>
    )
  }

  _getErrorInfo = (name) => {
    const errors = this.props.validator.errors
    return (errors[name] || [''])[0];
  };
}
