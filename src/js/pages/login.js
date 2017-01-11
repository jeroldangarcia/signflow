import React from 'react';

// components
import { Page, Toolbar } from 'tatami';
import { UserShortcut } from '../components/user';

// styles
import './login.scss';

// controllers
import sessionController from '../controllers/session';

/**
 * Login Page
 */
class Login extends React.Component {

  static defaultProps = {
    user: 'admin@idossiers.es',
    password: 'qwerty',
    message: '',
  }

  state = {
    user: this.props.user,
    password: this.props.password,
    message: '',
  }

  handleUser = (id, value) => {
    this.setState({ user: value })
  }

  handlePassword = (id, value) => {
    this.setState({ password: value })
  }

  handleSubmit = () => {
    sessionController.login(this.state.user, this.state.password, this.gotoPromotions, (error) => {
      this.setState({ message: error.message })
    });
  }

  userSelectionHandler(user, password) {
    return () => {
      sessionController.login(user, password, this.gotoPromotions, (error) => {
        this.setState({ message: error.message })
      });
    }
  }

  gotoPromotions = () => {
    this.props.goto('CAMPAIGNS');
  }

  render() {
    sessionController.logout();
    return (
      <Page>
        <Toolbar className="pageBar" title="Login" />
        <div className="login">
          <UserShortcut avatar="MKT" name="p_lopez" info="Compras de Material" onSelected={this.userSelectionHandler('p_lopez','12345678')}/>
          <UserShortcut avatar="MKT" name="i_diaz" info="Marketing" onSelected={this.userSelectionHandler('i_diaz','12345678')}/>
          <UserShortcut avatar="PPV" name="j_huete" info="PPV" onSelected={this.userSelectionHandler('j_huete','12345678')}/>
          <UserShortcut avatar="RLZ" name="j_rayon" info="Realización" onSelected={this.userSelectionHandler('j_rayon','12345678')}/>
        </div>
      </Page>
    );
  }
}

export default Login;
