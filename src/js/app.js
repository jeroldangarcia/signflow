import React from 'react';

// components
import Screen from './components/screen';
import Header from './components/header';
import AppDrawer from './appDrawer';
import Icon from './components/icon';

// pages
import Splash from './pages/splash';
import Login from './pages/login';
import Load from './pages/load';
import Campaigns from './pages/campaigns';
import Campaign from './pages/campaign';
import Materials from './pages/materials';
import LAMPS from './pages/lamps';
import LAMP from './pages/lamp';
import Orders from './pages/orders';
import Order from './pages/order';
import Drafts from './pages/drafts';
import Assets from './pages/assets';
import Supplies from './pages/supply';

/*
import Dossier from './pages/dossier';
*/

// stores
import session from './stores/session';
import store from './stores/dossiers';

// styles
import './app.scss';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

/**
 * Application
 */
class Application extends React.Component {

  state = {
    session,
    page: null,
    dialog: null,
  }

  componentWillMount() {
    this.gotoPage('DRAFTS');
  }

  pages = {
    'SPLASH'    : <Splash     fullscreen={true} />,
    'LOGIN'     : <Login      fullscreen={true} session={session} />,
    'LOAD'      : <Load       private="true" />,
    'CAMPAIGNS' : <Campaigns  private="true" />,
    'CAMPAIGN'  : <Campaign   private="true" />,
    'MATERIALS' : <Materials  private="true" />,
    'LAMPS'     : <LAMPS      private="true" />,
    'LAMP'      : <LAMP       private="true" />,
    'DRAFTS'    : <Drafts     private="true" />,
    'ASSETS'    : <Assets     private="true" />,
    'SUPPLIES'  : <Supplies    private="true" />,

    'ORDERS'    : <Orders     private="true" />,
    'ORDER'     : <Order      private="true" />,
  }

  canNavigateTo = (nextPage) => {
    return !nextPage.props.private || session.isLoggedIn();
  }

  gotoPage = (newPageID) => {
    const nextPage = this.pages[newPageID];
    const nextPageID = (nextPage && this.canNavigateTo(nextPage)) ? newPageID : 'LOGIN';
    this.setState({ page: nextPageID });
  }

  toggleDialog = (nextDialog) => {
    const dialog = nextDialog ? React.cloneElement(nextDialog, { toggleDialog: this.toggleDialog }) : null;
    this.setState({ dialog });
  }

  handleClose = (event) => {
    session.logout();
    this.gotoPage('LOGIN');
  }

  appBar =  <Header>
              <Icon icon="exit_to_app" action={this.handleClose}/>
            </Header>

  render() {
    const page = React.cloneElement(this.pages[this.state.page], { goto: this.gotoPage, toggleDialog: this.toggleDialog });
    const appDrawer = <AppDrawer onSelection={this.gotoPage} selected={this.state.page} role={session.rol()} name={session.name()}/>
    return (
      <Screen appBar={this.appBar} drawer={appDrawer} fullscreen={page.props.fullscreen} dialog={this.state.dialog}>
        {page}
      </Screen>
    );
  }

}

export default Application;
