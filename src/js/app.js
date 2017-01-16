import React from 'react';

// components
import { Tatami, Drawer, User } from 'tatami';
import { Header, Menu } from 'seito';

// pages
import Splash from './pages/splash';
import { Login, Exit } from 'tatami';
import Load from './pages/load';
import Campaigns from './pages/campaigns';
import Campaign from './pages/campaign';
import Materials from './pages/materials';
import LAMPS from './pages/lamps';
import LAMP from './pages/lamp';
import Orders from './pages/orders';
import Order from './pages/order';
import Drafts from './pages/drafts';
import Draft from './pages/draft';
import Assets from './pages/assets';
import Supplies from './pages/supply';

/**
 * Application
 */
const Application = (props) => {

  const ctxMenu = [
    { icon: 'fullscreen' , label: 'Full Screen'},
    { id: 'LOGIN', icon: 'exit_to_app', label: 'Exit'},
  ]

  const menu1 = [
    { id: 'CAMPAIGNS'    , label: 'Campañas'              , icon: 'card_giftcard' , roles: [ 'marketing', 'ppv', 'realizacion', 'compras' ]},
    { id: 'MATERIALS'    , label: 'Materiales'            , icon: 'recent_actors' , roles: [ 'compras' ]},
  ]

  const menu2 = [
    { id: 'LAMPS'        , label: 'Solicitudes Materiales', icon: 'assignment' , roles: [ 'ppv', 'marketing', 'realizacion' ], info: '7'},
    { id: 'SUPPLIES'     , label: 'Dotaciones Centros'    , icon: 'store'      , roles: [ 'ppv', 'marketing' ]},
  ]

  const menu3 = [
    { id: 'DRAFTS', label: 'Arte Final', icon: 'burst_mode', roles: [ 'realizacion' ], info: '10'},
  ]

  const appDrawer = <Drawer>
                      <Menu title="InterMarketing" options={menu1} />
                      <Menu title="PPV"            options={menu2} />
                      <Menu title="Realización"    options={menu3} />
                    </Drawer>

  const pages = {
    'WAIT'      : <Splash     />,
    'LOGIN'     : <Login title="Signage Flow" next="CAMPAIGNS" fullscreen={true} />,
    'EXIT'      : <Exit       />,

    'LOAD'      : <Load      />,
    'CAMPAIGNS' : <Campaigns drawer={appDrawer} />,
    'CAMPAIGN'  : <Campaign  drawer={appDrawer} />,
    'MATERIALS' : <Materials drawer={appDrawer} />,
    'LAMPS'     : <LAMPS     drawer={appDrawer} />,
    'LAMP'      : <LAMP      drawer={appDrawer} />,
    'DRAFTS'    : <Drafts    drawer={appDrawer} />,
    'DRAFT'     : <Draft     drawer={appDrawer} />,
    'ASSETS'    : <Assets    drawer={appDrawer} />,
    'SUPPLIES'  : <Supplies  drawer={appDrawer} />,
    'ORDERS'    : <Orders    drawer={appDrawer} />,
    'ORDER'     : <Order     drawer={appDrawer} />,
  }

  return (
    <Tatami title="Signage Flow" pages={pages} init="LOGIN" menu={ctxMenu} drawer={appDrawer} />
  );

}

export default Application;
