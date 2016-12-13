import React from 'react';

// components
import Page from '../components/page';
import Form from '../components/form';
import Panel from '../components/panel';
import Header from '../components/header';
import { Field } from '../components/field';
import { Button } from '../components/button';
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

  gotoPromotions = () => {console.log('gotopromotions')
    this.props.goto('CAMPAIGNS');
  }

  render() {
    return (
      <Page className="login">
        <div className="half-page">
          <h3>SignFlow</h3>
          <br/><br/><br/>
          <div className="multiuser">
            <UserShortcut avatar="MKT" name="p_lopez" info="Compras de Material" onSelected={this.userSelectionHandler('p_lopez','12345678')}/>
            <UserShortcut avatar="MKT" name="i_diaz" info="Marketing" onSelected={this.userSelectionHandler('i_diaz','12345678')}/>
            <UserShortcut avatar="PPV" name="j_huete" info="PPV" onSelected={this.userSelectionHandler('j_huete','12345678')}/>
            <UserShortcut avatar="RLZ" name="j_rayon" info="Realización" onSelected={this.userSelectionHandler('j_rayon','12345678')}/>
          </div>
          <br/>
          <Panel title="Custom User" collapsable={true} open={false}>
          <Form className="login form">
            <Field type="text" label="user" value={this.state.user} onChange={this.handleUser}/>
            <Field type="password" label="password" value={this.state.password} onChange={this.handlePassword}/>
            <div><input type="checkbox" /><label>Recordar Usuario</label></div>
            <Button className="accent" label="SIGN IN" action={this.handleSubmit} />
          </Form>
          <div>{this.state.message}</div>
          </Panel>
        </div>

      </Page>
    );
  }
}

export default Login;
