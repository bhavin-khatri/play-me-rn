import * as React from 'react';
import {Component} from 'react';
import {LoginUI} from './LoginUI';
import {login, LoginPayload} from '../../api_handler/methods/ApiHelper';
import {isEmpty, showToast} from '../../constants/Utils';
import {navigationConstant} from '../../constants/NavigationConstant';

export interface IState {
  email: string;
  password: string;
}

export class Login extends Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  componentDidMount() {}

  onEmailChange(email: string) {
    this.setState({email});
  }

  onPasswordChange(password: string) {
    this.setState({password});
  }

  async validateAndSubmit() {
    console.log('clicked');
    let email: string = this.state.email;
    let password: string = this.state.password;

    console.log('email===>', email.length);
    console.log('password===>', password);

    if (isEmpty(email)) {
      console.log('come here');
      showToast('Email is Required');
    } else if (isEmpty(password)) {
      showToast('Password is required');
    } else {
      await this.callLogin();
    }
  }

  async callLogin() {
    let payload: LoginPayload = {
      email: this.state.email,
      password: this.state.password,
    };

    await login(
      payload,
      data => {
        console.log('data====>', data);
        const {user} = data;
        console.log('user=====>', user);
        this.props.navigation.navigate(navigationConstant.DASHBOARD, {
          name: user.usr_fname,
        });
      },
      error => {
        showToast(error.errorMessage);
      },
    );
  }

  render() {
    return (
      <LoginUI
        email={this.state.email}
        password={this.state.password}
        onEmailChange={(email: string) => this.onEmailChange(email)}
        onPasswordChange={(pass: string) => this.onPasswordChange(pass)}
        onSubmitClick={() => this.validateAndSubmit()}
      />
    );
  }
}
