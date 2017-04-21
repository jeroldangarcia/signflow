import React from 'react';

// components
import { Tatami, Drawer, User } from 'tatami';
import { Header, Menu } from 'seito';

// pages
import { Login, Exit, Wait } from 'tatami';
import Load from './pages/load';
import Campaigns from './pages2/campaigns';
import Campaign from './pages/campaign';
import Materials from './pages/materials';

import Catalog from './pages2/catalog';
import Product from './pages2/product';

import LAMPS from './pages/lamps';
import LAMP from './pages/lamp';
import Orders from './pages/orders';
import Order from './pages/order';
import Drafts from './pages/drafts';
//import Draft from './pages/draft';
import Supplies from './pages/supply';
import Providers from './pages/providers';

import IMMenu from './pages/immenu';

/**
 * Application
 */
const Application = (props) => {

  const ctxMenu = [
    { id: 'LOGIN', icon: 'exit_to_app', label: 'Exit'},
  ]

  const menu0 = [
    { id: 'CATALOG'      , label: 'Materiales'            , icon: 'recent_actors' , roles: [ 'compras' ]},
    { id: 'LAMPS'        , label: 'Solicitudes Materiales', icon: 'assignment'    , roles: [ 'compras' ], info: '7'},

  ]

  const menu1 = [
    { id: 'MATERIALS'    , label: 'Materiales'            , icon: 'recent_actors' , roles: [ 'marketing' ]},
    { id: 'CAMPAIGNS'    , label: 'Campañas'              , icon: 'card_giftcard' , roles: [ 'marketing', 'ppv', 'realizacion' ]},
  ]

  const menu2 = [
    { id: 'MATERIALS'    , label: 'Materiales'            , icon: 'recent_actors' , roles: [ 'ppv' ]},
    { id: 'LAMPS'        , label: 'Solicitudes Materiales', icon: 'assignment'    , roles: [ 'ppv', 'marketing' ], info: '7'},
  //  { id: 'SUPPLIES'     , label: 'Dotaciones Centros'    , icon: 'store'         , roles: [ 'ppv', 'marketing' ]},
  ]

  const menu3 = [
    { id: 'MATERIALS', label: 'Materiales'          , icon: 'recent_actors' , roles: [ 'realizacion' ]},
    { id: 'PROVIDERS', label: 'Provision Materiales', icon: 'burst_mode'    , roles: [ 'realizacion' ], info: '10'},
    { id: 'DRAFTS'   , label: 'Arte Final'          , icon: 'burst_mode'    , roles: [ 'artefinal' ]  , info: '10'},
  ]

  const drawer = <Drawer>
                    <Menu title="Compras"        options={menu0} />
                    <Menu title="InterMarketing" options={menu1} />
                    <Menu title="PPV"            options={menu2} />
                    <Menu title="Realización"    options={menu3} />
                  </Drawer>

  const pages = {
    'WAIT'      : <Wait     />,
    'LOGIN'     : <Login title="SignFlow" next="PRODUCT" fullscreen={true} users={users}/>,
    'EXIT'      : <Exit       />,

    'IMMENU'    : <IMMenu    drawer={false} fullscreen={true}/>,

    'LOAD'      : <Load      drawer={true} />,
    'CAMPAIGNS' : <Campaigns drawer={true} />,
    'CAMPAIGN'  : <Campaign  drawer={true} />,
    'MATERIALS' : <Materials drawer={true} />,

    'CATALOG'   : <Catalog drawer={true} />,
    'PRODUCT'   : <Product drawer={true} />,

    'LAMPS'     : <LAMPS     drawer={true} />,
    'LAMP'      : <LAMP      drawer={true} tab={0}/>,
    'DRAFTS'    : <Drafts    drawer={true} />,
//    'DRAFT'     : <Draft     drawer={true} />,
    'SUPPLIES'  : <Supplies  drawer={true} />,
    'ORDERS'    : <Orders    drawer={true} />,
    'ORDER'     : <Order     drawer={true} />,
    'PROVIDERS' : <Providers drawer={true} />,
  }

  const tools = [
    { icon: 'messages', content: drawer }
  ]

  return (
    <Tatami title="SignFlow" pages={pages} init="LOGIN" drawer={drawer} tools={tools} menu={ctxMenu} />
  );

}

export default Application;

  const users = [
    {id:'p_lopez', icon:'person', title:'Pedro Lopez', caption:'Compras', role: 'compras'},
    {id:'d_echevarria', icon:'person', title:'David Echevarria', caption:'Marketing', role: 'marketing' },
    {id:'j_huete', icon:'person', title:'Julio Huete', caption:'PPV', role: 'ppv'},
    {id:'j_rayon', icon:'person', title:'Javier Rayón', caption:'Realización', role: 'realizacion'},
    {id:'p_mercado', icon:'person', title:'Paco Mercado', caption:'Arte Final', role: 'artefinal'},
  ]
