import React from 'react';

// components
import { Page, Toolbar, ConfirmDialog, SearchBox, Schedule } from 'tatami';
import { Icon, Select, Form, Field, List, SimpleListItem, GroupList, FAB, Panel, Switch, Menu, Validator } from 'seito';

import { InfoField } from '../components/field';
import API from '../api/apiClient';

// css
import './campaigns.scss';

// controller
import controller from '../controllers/promotions';

// store
import { Session } from 'tatami';

const loadCampaigns = (params, done) => {

  const onDelete = () => {
    alert('TODO: Delete Campaign Dialog');
  }

  const onSwap = () => {
    alert('TODO: Move Camapaign to other Group Dialog');
  }

  API.campaigns((data) => {
    const campaigns = data.map(cpn => {
      const info = `${cpn.date1.day} ${cpn.date1.month} - ${cpn.date2.day} ${cpn.date2.month}`;
      const actions = (
        <span style={{ display: 'flex', alignItems: 'center', height: '100%'}}>
          {cpn.date1.day} {cpn.date1.month} - {cpn.date2.day} {cpn.date2.month}
          &nbsp;&nbsp;
          <span className="badge">5</span>
          &nbsp;&nbsp;
          <Icon icon="swap_vert" className="clickable small green" action={onSwap}/>
          &nbsp;&nbsp;
          <Icon icon="delete" className="clickable small green" action={onDelete}/>
        </span>
      );
      const icon = '';
      const avatar = '';
      const color = Math.random() >= .5 ? 'bgred' : 'bggreen';
      return Object.assign( cpn, { info, icon, avatar, actions, color })
    })
    done({ campaigns })
  }, (error) => {
    console.log(error);
  })
}

/**
 * Promotions Page
 */
class Campaigns extends React.Component {

  static defaultProps = {
    inputAction: loadCampaigns,
  }

  state = {
    searching: true,
    search_group: '',
    search_campaign: '',
  }

  exit = () => {
    this.props.goto('SPLASH');
  }

  gotoCampaign = (campaign) => {
    this.props.goto('CAMPAIGN', campaign.id);
  }

  goto = () => {
    this.props.goto('ORDERS');
  }

  handleAdd = () => {
    const onOK = () => {
      this.props.toggleDialog(null);
    }

    this.props.toggleDialog(
      <ConfirmDialog title="Nueva Campaña" onOK={onOK} onCancel={onOK} onClose={onOK}>
        <Form title="Campaña">
          <Field id="" label="Empresa" value="EL CORTE INGLES" readOnly={true}/>
          <Field id="" label="Grupo" value="CO-Campañas Clientes Cultura, Ocio y Deportes 2017" readOnly={true}/>
          <Field id="" label="Nombre" />
          <Field id="" label="Fecha Inicio" />
          <Field id="" label="Fecha Fin" />
          <Field id="" label="Empresa" />
        </Form>
        <Form title="Subcampañas">
          <div><input type="checkbox" /><label>Catálogo</label></div>
          <div><input type="checkbox" /><label>Cartelería Gran Formato</label></div>
        </Form>
      </ConfirmDialog>
    )
  }

  handleAddGroup = () => {
    const onOK = () => {
      this.props.toggleDialog(null);
    }

    this.props.toggleDialog(
      <ConfirmDialog title="Nuevo Grupo de Campaña" onOK={onOK} onCancel={onOK} onClose={onOK}>
        <Form title="Grupo">
          <Field id="" label="Empresa" value="EL CORTE INGLES" readOnly={true}/>
          <Field id="" label="Nombre" />
          <Field id="" label="Fecha Inicio" />
          <Field id="" label="Fecha Fin" />
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

  handleFilterGroups= (id, value) => {
    this.setState({ search_group: value });
  }

  handleFilterCampaigns= (id, value) => {
    this.setState({ search_campaign: value });
  }

  handleEdit = () => {
    alert("TODO: edit/view group info dialog")
  }

  renderFAB() {
    const rol = Session.rol();
    return rol === 'marketing' || rol === 'ppv' ? <FAB icon="add" action={this.handleAdd}/> : '';
  }

  renderGroup = (props) => {
    const actions = [
      <Icon icon="edit" className="clickable small" action={this.handleEdit}/>,
      <Icon icon="add" className="clickable " action={this.handleAdd} />,
    ]
    return (
      <li style={{ position: 'relative', top: 0, backgroundColor: '#FFF', listStyleType: 'none', paddingLeft: '1.6rem'}}>
        <Panel title={props.title} collapsed={true} collapsable={false} actions={actions}/>
      </li>
    )
  }

  render () {

    const campaigns = this.props.ctx.campaigns.filter( campaign => {
      return Validator.notEmpty(this.state.search_group) ?
        campaign.groupBy.toUpperCase().indexOf(this.state.search_group.toUpperCase()) >= 0 : true;
    }).filter( campaign => {
      const values = campaign.caption + campaign.title;
      return Validator.notEmpty(this.state.search_campaign) ?
        values.toUpperCase().indexOf(this.state.search_campaign.toUpperCase()) >= 0 : true;
    });

    const pageMenu = [
      { icon: 'check_circle', label: 'Ver Grupos' },
      { icon: 'radio_button_unchecked', label: 'Ver SubCampañas' },
      { icon: 'insert_drive_file', label: 'Informe Excel'}
    ]

    const title = [
      <span>CAMPAÑAS</span>,
      <Select options={companies} value="0"/>
    ]

    const searchBox = this.state.searching ? <div style={{ borderRadius: '5px', margin: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-around', backgroundColor: '#DDD' }}>
      <Icon icon="search" className="" />
      <SearchBox label="Grupo Campaña" onChange={this.handleFilterGroups}    value={this.state.search_group}    className="flex40"/>
      <SearchBox label="Campaña"       onChange={this.handleFilterCampaigns} value={this.state.search_campaign} className="flex40"/>
      OrderBy:
      <Icon icon="date_range" className="clickable small" />
      <Icon icon="sort_by_alpha" className="clickable small" />
    </div> : '';

    return (
      <Page className="campaigns">

        <Toolbar className="pageBar" icon="card_giftcard" title={title} menu={pageMenu}>
          <Select options={time} />
          <Select options={stateCriterias} />
          <Icon icon="search" action={this.toggleSearch} />
        </Toolbar>

        {searchBox}

        <List data={campaigns} renderer={SimpleListItem} onSelection={this.gotoCampaign} groupBy="groupBy" groupRenderer={this.renderGroup}/>

        <FAB icon="add" action={this.handleAddGroup}/>

      </Page>
    );
  }

};

export default Campaigns;
/*
<Select options={groups}         />
<Select options={stateCriterias} />
<Select options={time}           />
<Schedule events={this.props.ctx.campaigns2} groupBy="groupBy" onSelection={this.gotoCampaign} groupRenderer={this.renderGroup}/>
<GroupList data={this.props.ctx.campaigns} onPrimaryAction={this.gotoCampaign}/>
  const events = [
      { "id": "11", color: "#FF8888", "title": "BLACK FRIDAY 2016",                  "caption": "0306 / 20129", "info": "hasta 27/11/2016...", groupBy: "2016", date1: { month: "OCT", day: "5"  }, date2: { month: "OCT", day: "8"  }, avatar: "https://randomuser.me/api/portraits/thumb/men/12.jpg" },
      { "id": "12", color: "#88AA88", "title": "BLACK FRIDAY CLUB DEL GOURMET",      "caption": "0166 / 21354", "info": "hasta 27/11/2016...", groupBy: "2016", date1: { month: "NOV", day: "10" }, date2: { month: "NOV", day: "15" }, avatar: "https://randomuser.me/api/portraits/thumb/men/13.jpg" },
      { "id": "13", color: "#8888AA", "title": "BLACK FRIDAY SUPERMERCADO",          "caption": "0212 / 20364", "info": "hasta 27/11/2016...", groupBy: "2016", date1: { month: "DIC", day: "20" }, date2: { month: "DIC", day: "25" }, avatar: "https://randomuser.me/api/portraits/thumb/men/14.jpg" },
      { "id": "14", color: "#6688DD", "title": "MASCOTAS BLACK FRIDAY SUPERMERCADO", "caption": "0166 / 21059", "info": "hasta 27/11/2016...", groupBy: "2017", date1: { month: "JAN", day: "1"  }, date2: { month: "JAN", day: "5"  }, avatar: "https://randomuser.me/api/portraits/thumb/men/15.jpg" },
      { "id": "15", color: "#66AAAA", "title": "MOTOR TOWN BLACK FRIDAY 2016",       "caption": "1168 / 21510", "info": "hasta 27/11/2016...", groupBy: "2017", date1: { month: "FEB", day: "25" }, date2: { month: "MAR", day: "1"  }, avatar: "https://randomuser.me/api/portraits/thumb/men/16.jpg" },
  ]
*/
const user = {
  icon: 'person',
  name: 'John Doe',
  deptno: 'Marketing',
}

const time = [
  { label: 'Ejercicio Actual', value: 'ACTUAL' },
  { label: 'Ej. 2016-2017', value: 'PREV' },
  { label: 'Ej. 2015-2016', value: 'THISYEAR' },
  { label: 'Todos los Ejercicios', value: 'ALL' },
]

const companies= [
    { label: 'EL CORTE INGLÉS', value: 'ECI' },
    { label: 'HIPERCOR', value: 'Hipercor' },
    { label: 'SFERA', value: 'sfera' },
]

const groups = [
  { label: 'Todos los grupos', value: '00000' },
  { label: 'FV', value: '00001' },
  { label: 'NV', value: '00002' },
  { label: 'XV', value: '00003' },
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
  { label: 'Fecha', value: 'DATE' },
  { label: 'Nombre', value: 'NAME' },
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
