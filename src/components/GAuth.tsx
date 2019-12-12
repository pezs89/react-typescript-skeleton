import React, { Component } from 'react';

interface GauthState {
  isSignedIn: boolean
}

class GAuth extends Component<{}, GauthState> {
  auth: boolean = false;
  state = { isSignedIn: false };

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

  renderAuthButton(): JSX.Element {
    if (this.state.isSignedIn) {
      return <div>Signed in</div>
    } else {
      return <div>Signed out</div>
    }
  }

  render(): JSX.Element {
    return <div>{this.renderAuthButton()}</div>
  }
}

export default GAuth;