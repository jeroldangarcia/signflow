import React from 'react';

// 3rd
import {Line, Doughnut} from 'react-chartjs-2';

// components
import { Page, Toolbar, ConfirmDialog } from 'tatami';
import { FAB, Icon, Button, Header, Panel, Tabs, Tab, Stack, Form, Field, DateField, Select } from 'seito';

import { InfoField } from '../components/field';
import Timeline from '../components/timeline';

// fragments
import CampaignTarget from '../fragments/campaign-target';
import CampaignTracking from '../fragments/campaign-tracking';
import CampaignCost from '../fragments/campaign-cost';

import API from '../api/apiClient';

const loadCampaign = (id, done) => {
  API.campaign(id, (campaign) => {
      done({ campaign })
  }, console.log);
}

/**
 * Campaign Page
 */
class Campaign extends React.Component {

  static defaultProps = {
    inputAction: loadCampaign,
  }

  state = {
    tab : 0,
    tab2: 0,
  }

  back = () => {
    this.props.goto('CAMPAIGNS');
  }

  gotoTokenPage = (token) => {
    this.props.goto(token.goto);
  }

    handleInfoDialog = () => {
      this.props.toggleDialog(
        <ConfirmDialog title="Info de Campaña" onClose={this.handleCloseDialog} onCancel={this.handleCloseDialog}>
          <Form title="Info">
            <Field label="Empresa" value="" />
            <Field label="Grupo" value="" />
            <Field label="Clasificación" value="" />
            <Field label="Nombre" value="" />
          </Form>
          <Form title="Planificación">
            <Field label="Fecha Inicio" value="" />
            <Field label="Fecha Fin" value="" />
          </Form>
        </ConfirmDialog>
      )
    }

    handleAddSubCampaignDialog = () => {
      this.props.toggleDialog(
        <ConfirmDialog title="Nueva Subcampaña..." onClose={this.handleCloseDialog} onCancel={this.handleCloseDialog}>
            <Field icon="fingerprint"      label="Nombre" value="" />
            <DateField icon="date_range"   label="Inicio" value="" />
            <DateField icon="none"         label="Fin" value="" />
            <Select    icon="store"        label="Empresa" options={[]} value="" />
            <Select    icon="dashboard"    label="Departamento" options={[]} value="" />
            <Select    icon="attach_money" label="Con Cargo a ...." options={[]} value="" />
            <Field     icon="person"       label="Contacto" value="" />
            <Field     icon=""             label="Observaciones" type="textarea" />
        </ConfirmDialog>
      )
    }

    handleCloseDialog = () => {
      this.props.toggleDialog(null);
    }

  handleChangeTab = (tab) => {
    this.setState({ tab })
  }

  handleChangeTab2 = (tab2) => {
    this.setState({ tab2 })
  }

  renderSubcampaign = (data) => {
    const title = <span>
      <span style={{ fontSize: '1.4rem', fontWeight: 400 }}>{`[ ${data.id} ]`}</span>
      <span style={{ fontSize: '1.4rem', fontWeight: 300 }}>{` ${data.type} `}</span>
      <span style={{ fontSize: '1.5rem', fontWeight: 500 }}>{`${data.name}`}</span>
    </span>;
    const actions = <span>{data.state}</span>
    return (
      <Panel className="infopanel" icon="import_contacts" title={title}  info="24 ... 27 Noviembre 2016" collapsable={true} open={false}  actions={actions}>
        <Tabs selected={this.state.tab2} onChange={this.handleChangeTab2}>
          <Tab label="Info" />
          <Tab label="Plan Implantación" />
          <Tab label="Presupuesto" />
          <Tab label="Actividad"/>
        </Tabs>
        <Stack selected={this.state.tab2}>

          <Form>
            <Field icon="fingerprint"      label="Nombre" value="" />
            <DateField icon="date_range"   label="Inicio" value="" />
            <DateField icon="none"         label="Fin" value="" />
            <Select    icon="store"        label="Empresa" options={[]} value="" />
            <Select    icon="dashboard"    label="Departamento" options={[]} value="" />
            <Select    icon="attach_money" label="Con Cargo a ...." options={[]} value="" />
            <Field     icon="person"       label="Contacto" value="" />
            <Field     icon=""             label="Observaciones" type="textarea" />
          </Form>

          <Form>
            <Header icon="store" title="Centros" className="default-title"/>
            <Header icon="dashboard" title="Divisiones" className="default-title"/>
            <Field label="Tipo Implantacion"/>
          </Form>

          <Form>
            <Header icon="burst_mode" title="Listado de Materiales" className="default-title" />
          </Form>

          <Form>
            <Timeline tokens={catalogTimeline} onTokenSelected={this.gotoTokenPage}/>
            <Header title="Log de actividad" />
          </Form>
        </Stack>
        <br/>
      </Panel>
    )
  }

  render() {

    const subcampaignsActions = <Header>
      <Select label="Agrupado por" options={subcampaignGroups} />
      <Icon icon="add" action={this.handleAddSubCampaignDialog} />
    </Header>

    const pageMenu = [
      { icon: 'edit' , label: 'Editar Info' },
      { icon: 'check', label: 'Tiene Medios'},
      { icon: 'assignment' , label: 'Enviar Briefing'},
    ]

    const title=(
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Icon icon="card_giftcard"/>
        <span>{this.props.ctx.campaign.title}</span>
      </div>
    )

    return (
      <Page>

        <div style={{ marginTop: '1rem', paddingLeft: '.4rem', display: 'flex', justifyContent: 'flex-start', alignContent: 'center', lineHeight: '1.1rem', color: '#20A867', fontWeight: '400', fontSize: '1.3rem', textAlign: 'left' }}>
          <span style={{ lineHeight: '1.5rem', margin: '0 .5rem'}}><span style={{ color: '#555', fontWeight: '200', display: 'none'}}>empresa:</span> El Corte Inglés</span> |
          <span style={{ lineHeight: '1.5rem', margin: '0 .5rem'}}><span style={{ color: '#555', fontWeight: '200', display: 'none'}}>grupo:</span> ECI/FV Verticales OI 2016 </span> |
          <span style={{ lineHeight: '1.5rem', margin: '0 .5rem'}}><span style={{ color: '#555', fontWeight: '200', display: 'none'}}>clasificación:</span> Fuerza de Venta/mixta </span>
        </div>
        <br/>

        <Toolbar icon="arrow_back" className="pageBar" title={title} menu={pageMenu} action={this.back}>
          <span style={{ lineHeight: '1.5rem', margin: '0 .5rem', display: 'flex', alignItems: 'center', fontWeight: '200', fontSize: '1.5rem'}}>
            <span style={{ color: '#555', fontWeight: '200', display: 'none'}}>desde:</span> {this.props.ctx.campaign.date1.day}&nbsp;{this.props.ctx.campaign.date1.month}
            <Icon icon="arrow_forward" className="small"/>
            <span style={{ color: '#555', fontWeight: '200', display: 'none'}}>hasta:</span> {this.props.ctx.campaign.date2.day}&nbsp;{this.props.ctx.campaign.date2.month}
          </span>
        </Toolbar>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'auto'}}>

          <CampaignTarget toggleDialog={this.props.toggleDialog}/>
          <CampaignTracking />
          <CampaignCost />

          <br/>

          <Tabs selected={this.state.tab} onChange={this.handleChangeTab}>
            <Tab label="SUBCAMPAÑAS" />
            <Tab label="PROMOCIONES SGP" />
          </Tabs>

          <Stack selected={this.state.tab}>

            <div>
              {this.props.ctx.campaign.subcampaigns.map(this.renderSubcampaign)}
              <FAB icon="import_contacts" action={this.handleAddSubCampaignDialog}/>
            </div>

            <div>
              <Panel className="infopanel" icon="card_giftcard" title="PromoFans GranCasa Black Friday"  info="23 Noviembre ... 11 Diciembre 2016" collapsable={false} open={false} />
              <Panel className="infopanel" icon="card_giftcard" title="Black Friday: Club del Gourmet 2016"  info="24 ... 27 Noviembre 2016" collapsable={false} open={false} />
              <Panel className="infopanel" icon="card_giftcard" title="Black Friday: Supermercado"  info="24 ... 27 Noviembre 2016" collapsable={false} open={false} />
              <Panel className="infopanel" icon="card_giftcard" title="Black Friday 2016"  info="24 ... 27 Noviembre 2016" collapsable={false} open={false} />
              <Panel className="infopanel" icon="card_giftcard" title="Mascotas Black Friday"  info="23 Noviembre ... 11 Diciembre 2016" collapsable={false} open={false} />
              <Panel className="infopanel" icon="card_giftcard" title="Super Black Friday"  info="23 Noviembre ... 11 Diciembre 2016" collapsable={false} open={false} />
            </div>
          </Stack>

        </div>
      </Page>

    )
  }
}

const subcampaignGroups = [
  { label: 'Departamento', value: '0002' },
  { label: 'Trabajo', value: '0001' },
]

const catalogTimeline = [
  { label: 'Start',     icon: 'star',            state: 'done'    },
  { label: 'Solicitud', icon: 'assignment',      state: 'stopped' },
  { label: 'Borrador',  icon: 'brush',           state: 'stopped' },
  { label: 'Trabajo',   icon: 'import_contacts', state: 'stopped' },
  { label: 'Aprobado',  icon: 'stop',            state: 'stopped' },
]

const campaignsTimeline = [
  { label: 'Start',       icon: 'star',           state: 'done' },
  { label: 'Solicitud',   icon: 'assignment',     state: 'warning' , goto: 'LAMP'},
  { label: 'Dotaciones',  icon: 'recent_actors',  state: 'done', goto: 'ORDER'},
  { label: 'Arte Final',  icon: 'burst_mode',     state: 'done', goto: 'DRAFTS'},
  { label: 'Envio',       icon: 'local_shipping', state: 'stopped' },
//  { label: 'Montaje',     icon: 'format_paint',   state: 'stopped' },
  { label: 'Pre Facturacion', icon: 'euro_symbol',    state: 'stopped' },
  { label: 'Init',        icon: 'play_arrow',     state: 'stopped' },
  { label: 'End',         icon: 'stop',           state: 'stopped' },
]

const activity = [
  { icon: 'playlist_add', title:'<usuario1> añadio <material1>', subtitle:'01/10/2016'},
  { icon: 'remove_circle_outline', title:'<usuario2> elimina <material4>', subtitle:'01/10/2016'},
  { icon: 'cloud_done', title:'<usuario2> aprueba <LAMP>', subtitle:'01/10/2016'},
  { icon: 'cloud_upload', title:'<usuario3> publica <LAMP>', subtitle:'01/10/2016'},
]

export default Campaign;
