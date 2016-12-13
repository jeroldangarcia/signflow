import React from 'react';

// components
import List from './components/list';
import Drawer from './components/drawer';
import { User } from './components/user';

/**
 * Application Drawer
 */
const AppDrawer = (props) => {

  const security =
    [
      { deptno: 'marketing'  , options: [ 'CAMPAIGNS', 'LAMPS' ]},
      { deptno: 'ppv'        , options: [ 'CAMPAIGNS', 'LAMPS', 'SUPPLIES' ]},
      { deptno: 'realizacion', options: [ 'CAMPAIGNS', 'DRAFTS', 'ASSETS' ]},
      { deptno: 'compras'    , options: [ 'MATERIALS' ]},
    ]

  const menu = [
    //{ id: 'CAMPAIGNS_GROUPS' , title: 'Grupos' , subtitle: '...', icon: 'card_giftcard', area: "InterMarketing" },
    { id: 'CAMPAIGNS'    , title: 'Campañas'              , subtitle: '...', icon: 'card_giftcard', area: "InterMarketing" },
    { id: 'SUBCAMPAIGNS' , title: 'SubCampañas'           , subtitle: '...', icon: 'card_giftcard', area: "InterMarketing" },
    { id: 'LAMPS'        , title: 'Solicitudes Materiales', subtitle: '...', icon: 'assignment'   , decorator: 'inbox' , area: "SignFlow"},
    { id: 'SUPPLIES'     , title: 'Dotaciones Centros'    , subtitle: '...', icon: 'store'        , decorator: 'inbox' , area: "SignFlow"},
    { id: 'DRAFTS'       , title: 'Bocetos'               , subtitle: '...', icon: 'brush'        , decorator: 'inbox' , area: "SignFlow"},
    { id: 'ASSETS'       , title: 'Arte Final'            , subtitle: '...', icon: 'burst_mode'   , decorator: 'inbox' , area: "SignFlow"},
    { id: 'MATERIALS'    , title: 'Materiales'            , subtitle: '...', icon: 'recent_actors', area: "Compras"},
  ]

  const handleMenuItemSelected = (id) => {
    props.onSelection(id);
  }

  const deptnoOptions = security.find(rule => rule.deptno === props.role).options;
  const userMenu = menu.filter(option => {
    return deptnoOptions.includes(option.id);
  });
  console.log(userMenu)

  return (
    <Drawer icon="menu" title="SignFlow">
      <User role={props.name} fullname={props.role} email={props.email}/>
      <List data={userMenu} onSelected={handleMenuItemSelected} groupBy="area" sortBy={false} selected={props.selected} ordered={false}/>
      <div style={{ flex: 0}}></div>
    </Drawer>
  )
}

export default AppDrawer;
