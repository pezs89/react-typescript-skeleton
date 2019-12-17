import React, { Component } from 'react';
import Button from './Button';

interface GauthState {
  isSignedIn: boolean | null
}

class GAuth extends Component<{}, GauthState> {
  state = { isSignedIn: null };

  componentDidMount(): void {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '630462222615-es4s716t5m9a1b252qgsc5gkuvgtf4t4.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        window.gapi.auth2.getAuthInstance().isSignedIn.listen((isSignedIn) => this.onAuthChange(isSignedIn))
      })
    });
  }

  onAuthChange = (isSignedIn: boolean): void => {
    this.setState({
      isSignedIn
    })
  }

  handleSignOutClick = (): void => {
    window.gapi.auth2.getAuthInstance().signOut();
  }

  handleSignInClick = (): void => {
    window.gapi.auth2.getAuthInstance().signIn();
  }

  renderAuthButton(): JSX.Element {
    const { isSignedIn } = this.state;
    if (isSignedIn) {
      return <div><Button label='Logout' value='logout' callback={this.handleSignOutClick} /></div>
    } else {
      return <div><Button label='Login' type='button' value='login' callback={this.handleSignInClick} /></div>
    }
  }

  render(): JSX.Element {
    return <div>{this.renderAuthButton()}</div>
  }
}

export default GAuth;