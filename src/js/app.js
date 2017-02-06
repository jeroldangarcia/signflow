import React from 'react';

// components
import { Tatami, Drawer, User } from 'tatami';
import { Header, Menu } from 'seito';

// pages
import { Login, Exit, Wait } from 'tatami';
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
import Supplies from './pages/supply';
import Providers from './pages/providers';

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
    { id: 'MATERIALS'    , label: 'Materiales'            , icon: 'recent_actors' , roles: [ 'compras', 'ppv' ]},
  ]

  const menu2 = [
    { id: 'LAMPS'        , label: 'Solicitudes Materiales', icon: 'assignment' , roles: [ 'ppv', 'marketing' ], info: '7'},
    { id: 'SUPPLIES'     , label: 'Dotaciones Centros'    , icon: 'store'      , roles: [ 'ppv', 'marketing' ]},
  ]

  const menu3 = [
    { id: 'PROVIDERS', label: 'Provision Materiales', icon: 'burst_mode', roles: [ 'realizacion' ], info: '10'},
    { id: 'DRAFTS'   , label: 'Arte Final'          , icon: 'burst_mode', roles: [ 'artefinal' ]  , info: '10'},
  ]

  const appDrawer = <Drawer>
                      <Menu title="InterMarketing" options={menu1} />
                      <Menu title="PPV"            options={menu2} />
                      <Menu title="Realización"    options={menu3} />
                    </Drawer>

  const pages = {
    'WAIT'      : <Wait     />,
    'LOGIN'     : <Login title="SignFlow" next="LOAD" fullscreen={true} users={users}/>,
    'EXIT'      : <Exit       />,

    'LOAD'      : <Load      drawer={true} />,
    'CAMPAIGNS' : <Campaigns drawer={true} />,
    'CAMPAIGN'  : <Campaign  drawer={true} />,
    'MATERIALS' : <Materials drawer={true} />,
    'LAMPS'     : <LAMPS     drawer={true} />,
    'LAMP'      : <LAMP      drawer={true} />,
    'DRAFTS'    : <Drafts    drawer={true} />,
    'DRAFT'     : <Draft     drawer={true} />,
    'SUPPLIES'  : <Supplies  drawer={true} />,
    'ORDERS'    : <Orders    drawer={true} />,
    'ORDER'     : <Order     drawer={true} />,
    'PROVIDERS' : <Providers drawer={true} />,
  }

  return (
    <Tatami title="SignFlow" pages={pages} init="LOGIN" menu={ctxMenu} drawer={appDrawer} />
  );

}

export default Application;

  const users = [
    {id:'p_lopez', icon:'person', title:'Pedro Lopez', caption:'Compras', role: 'compras'},
    {id:'d_echebarria', icon:'person', title:'David Echevarria', caption:'Marketing', role: 'marketing' },
    {id:'j_huete', icon:'person', title:'Julio Huete', caption:'PPV', role: 'ppv'},
    {id:'j_rayon', icon:'person', title:'Javier Rayón', caption:'Realización', role: 'realizacion'},
    {id:'p_mercado', icon:'person', title:'Paco Mercado', caption:'Arte Final', role: 'artefinal'},
  ]
