import React from 'react';

// components
import { Page, Toolbar } from 'tatami';
import { Header, Panel, List } from 'seito';

import Icon from '../components/icon';

const Orders = (props) => {

  const exit = () => {
    props.goto('SPLASH');
  }

  const back = () => {
    props.goto('PROMOTIONS');
  }

  const goto = () => {
    props.goto('ORDER');
  }

  const header =
    <Header title="Promoción Navidad">
      <Icon icon="arrow_back" action={back}/>
      <Icon icon="exit_to_app" action={exit}/>
    </Header>

  return (
    <Page  >
      <Panel title="filters" open="false">
        Filtros de peticiones
      </Panel>
      <List data={data} onSelected={goto}/>
    </Page>
  );
};

export default Orders;

const data = [
  { id: 0, title: 'Peticion 1', subtitle: '10/08/2016', icon: 'description'},
  { id: 1, title: 'Peticion 2', subtitle: '12/08/2016', icon: 'description'},
  { id: 2, title: 'Peticion 3', subtitle: '15/08/2016', icon: 'description'},
  { id: 3, title: 'Peticion 4', subtitle: '19/08/2016', icon: 'description'},
  { id: 4, title: 'Peticion 5', subtitle: '20/08/2016', icon: 'description'},
  { id: 5, title: 'Peticion 6', subtitle: '28/08/2016', icon: 'description'},
]
