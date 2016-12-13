import React from 'react';

// components
import Page from '../components/page';
import Header from '../components/header';
import Drawer from '../components/drawer';
import Icon from '../components/icon';
import List from '../components/list';
import { FAB } from '../components/button';
import { InfoField, Select, SearchBox } from '../components/field';
import { ConfirmDialog } from '../components/dialogs';
import Form from '../components/form';

// controller
import controller from '../controllers/promotions';

// store
import session from '../stores/session';

/**
 * Promotions Page
 */
class Campaigns extends React.Component {

  state = {
    items: [],
    searching: false,
    search: '',
  }

  componentWillMount() {
    controller.load((items) => {
      this.setState({ items });
    });
  }

  exit = () => {
    this.props.goto('SPLASH');
  }

  gotoPromotions = () => {
    this.props.goto('CAMPAIGNS');
  }

  goto = () => {
    this.props.goto('ORDERS');
  }

  handleAdd = () => {
    const onOK = () => {
      console.log('OK');
      this.props.toggleDialog(null);
    }
    this.props.toggleDialog(
      <ConfirmDialog title="Nueva Campaña" onOK={onOK}>
        <Form title="Campaña">
          <InfoField id="" label="Nombre" />
          <InfoField id="" label="Fecha Inicio" />
          <InfoField id="" label="Fecha Fin" />
          <InfoField id="" label="Empresa" />
        </Form>
        <Form title="Subcampañas">
          <div><input type="checkbox" /><label>Catálogo</label></div>
          <div><input type="checkbox" /><label>Plan de Medios</label></div>
          <div><input type="checkbox" /><label>Cartelería Gran Formato</label></div>
        </Form>
      </ConfirmDialog>
    )
  }

  handleSelected = () => {
    this.props.goto('CAMPAIGN');
  }

  toggleSearch = () => {
    this.setState({ searching: !this.state.searching });
  }

  handleSearch = (id, value) => {
    this.setState({ search: value });
  }

  renderFAB() {
    const rol = session.rol();
    return rol === 'marketing' || rol === 'ppv' ? <FAB icon="add" action={this.handleAdd}/> : '';
  }

  render () {

    const title = <div style={{ display: 'flex' }}>
                    <span>CAMPAÑAS</span>
                    <Select options={companies} className="title-like"/>
                  </div>

    const header =  <Header icon="card_giftcard" title={title} className="page-title" >
                      <Select options={groups} />
                      <Select options={stateCriterias} />
                      <Select options={time} />
                      <Icon icon="search" action={this.toggleSearch}/>
                    </Header>;

    const data = this.state.items.filter( item => {
      return this.state.search ? item.title.toUpperCase().indexOf(this.state.search.toUpperCase()) >= 0 : true;
    });

    const searchBox = this.state.searching ? <div style={{ display: 'flex'}}>
      <SearchBox onChange={this.handleSearch} />
    </div> : '';

    return (
      <Page title={header}>
        {searchBox}
        <List data={data} groupBy="group" onSelected={this.handleSelected} className="bigGroup"/>
        <FAB icon="add" action={this.handleAdd}/>
      </Page>
    );
  }

};

export default Campaigns;

const user = {
  icon: 'person',
  name: 'John Doe',
  deptno: 'Marketing',
}

const time = [
  { label: 'Último Mes', value: '1MONTH' },
  { label: 'Últimos 6 meses', value: '6MONTH' },
  { label: 'Últimos 12 meses', value: '12MONTH' },
  { label: 'Año Actual', value: 'THISYEAR' },
]

const companies= [
    { label: 'EL CORTE INGLÉS', value: 'ECI' },
    { label: 'HIPERCOR', value: 'Hipercor' },
    { label: 'ESFERA', value: 'Esfera' },
]

const groups = [
  { label: 'Todos los grupos', value: '00000' },
  { label: 'Clientes Moda', value: '00001' },
  { label: 'Clientes Hogar', value: '00002' },
  { label: 'Alimentación', value: '00003' },
]

const clasifications = [
  { label:'Cultura y ocio', value: '1'},
  { label:'DVD', value: '2'},
  { label:'Fuerza de Venta', value: '3'},
  { label:'Gran consumo', value: '4'},
  { label:'Hogar', value: '5'},
  { label:'Moda', value: '6'},
  { label:'Otros', value: '7'}
]

const subjects = [
  { label: 'GRUPOS', value: 'CAMPAIGN_GROUPS' },
  { label: 'CAMPAÑAS', value: 'CAMPAIGNS' },
]

const orderCriterias = [
  { label: 'Fecha', value: 'FECHA' },
  { label: 'Nombre', value: '1MONTH' },
]

const groupCriterias = [
  { label: 'Grupo', value: 'GROUP' },
  { label: 'Año', value: 'YEAR' },
  { label: 'Mes', value: 'MONTH' },
]

const stateCriterias = [
  { label: 'En Curso', value: 'OPEN' },
  { label: 'Terminadas', value: 'CLOSED' },
  { label: 'Todas', value: 'ALL' },
]