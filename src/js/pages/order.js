import React from 'react';
import Page from '../components/page';
import Header from '../components/header';
import Drawer from '../components/drawer';
import Icon from '../components/icon';
import List from '../components/list';
import Panel from '../components/panel';
import Form from '../components/form';
import Field from '../components0/field';

const Order = (props) => {

  const exit = () => {
    props.goto('SPLASH');
  }

  const back = () => {
    props.goto('ORDERS');
  }

  const gotoPromotions = () => {
    props.goto('PROMOTIONS');
  }

  const gotoOrder = () => {
    props.goto('ORDERS');
  }

  const gotoCostSimulation = () => {
    props.goto('COST-SIMULATION');
  }

  const header =
    <Header title="<Petición de Material>">
      <Icon icon="attach_money" action={gotoCostSimulation}/>
      <Icon icon="arrow_back" action={back}/>
      <Icon icon="exit_to_app" action={exit}/>
    </Header>

  const drawer =
    <Drawer icon="layers">
      <Icon icon="inbox" action={gotoPromotions} />
      <Icon icon="card_giftcard" action={gotoPromotions} />
      <Icon icon="search" action={gotoOrder} />
    </Drawer>

  return (
    <Page header={header} drawer={drawer}>
      <Form title="Info ">
        <Field icon="fingerprint" label="Código" type="text" value={order.id} />
        <Field icon="card_giftcard" label="Promocion" type="selection" options={promotions} value={order.promotion} />
        <Field icon="store" label="Centro" type="selection" options={centers} value={order.center} />
        <Field icon="data_range" label="Fecha" type="date" value={order.date} />
      </Form>
      <List title="Materiales" data={data} onSelected={gotoCostSimulation} />
      <footer>
        <Icon icon="attach_money" />
      </footer>
    </Page>
  )
}

export default Order;

const promotions = [];
const centers = [];
const order = {
  id: 0,
  promotion: 'promotion1',
  center: 'center1',
  date: '1016-09-18',
}
const data = [
  { id: 0, title: 'Material 1', subtitle: '200€', icon: 'layers'},
  { id: 1, title: 'Material 2', subtitle: '200€', icon: 'layers'},
  { id: 2, title: 'Material 3', subtitle: '200€', icon: 'layers'},
  { id: 3, title: 'Material 4', subtitle: '200€', icon: 'layers'},
  { id: 4, title: 'Material 5', subtitle: '200€', icon: 'layers'},
  { id: 5, title: 'Material 6', subtitle: '200€', icon: 'layers'},
  { id: 6, title: 'Material 1', subtitle: '200€', icon: 'layers'},
  { id: 7, title: 'Material 2', subtitle: '200€', icon: 'layers'},
  { id: 8, title: 'Material 3', subtitle: '200€', icon: 'layers'},
  { id: 9, title: 'Material 4', subtitle: '200€', icon: 'layers'},
  { id: 10, title: 'Material 5', subtitle: '200€', icon: 'layers'},
  { id: 11, title: 'Material 6', subtitle: '200€', icon: 'layers'},
]
