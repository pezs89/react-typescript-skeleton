import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import { login, logout } from '../store/features/auth/actions';
import { ApplicationState } from '../store';

const mapStateToProps = (state: ApplicationState) => ({
  isLoggedIn: state.auth.isLoggedIn
});

const dispatchProps = {
  login,
  logout
};

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

class GAuth extends Component<Props> {
  auth: gapi.auth2.GoogleAuth | null;

  constructor(props: Props) {
    super(props);
    this.auth = null;
  }

  componentDidMount(): void {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '630462222615-es4s716t5m9a1b252qgsc5gkuvgtf4t4.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen((isSignedIn) => this.onAuthChange(isSignedIn))
      })
    });
  }

  onAuthChange = (isLoggedIn: boolean): void => {
    if (isLoggedIn && this.auth) {
      this.props.login(this.auth.currentUser.get().getId());
    } else {
      this.props.logout();
    }
  }

  handleSignOutClick = (): void => {
    if (this.auth) {
      this.auth.signOut();
    }
  }

  handleSignInClick = (): void => {
    if (this.auth) {
      this.auth.signIn();
    }
  }

  renderAuthButton(): JSX.Element {
    const { isLoggedIn } = this.props;
    if (isLoggedIn) {
      return <div><Button label='Logout' value='logout' callback={this.handleSignOutClick} /></div>
    } else {
      return <div><Button label='Login' type='button' value='login' callback={this.handleSignInClick} /></div>
    }
  }

  render(): JSX.Element {
    return <div>{this.renderAuthButton()}</div>
  }
}

export default connect(mapStateToProps, dispatchProps)(GAuth);