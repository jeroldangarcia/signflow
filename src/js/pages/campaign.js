import React from 'react';

// 3rd
import {Line, Doughnut} from 'react-chartjs-2';

// components
import { Page, Toolbar, ConfirmDialog } from 'tatami';
import { Icon, Button, Header, Panel, Tabs, Tab, Stack } from 'seito';

import Form from '../components/form';
import { Select, InfoField } from '../components/field';
import Timeline from '../components/timeline';

import API from '../api/apiClient';

const loadCampaign = (params, done) => {
  API.subcampaigns((data) => {
    done({
      subcampaigns: data,
    })
  })
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
            <InfoField label="Empresa" value="" />
            <InfoField label="Grupo" value="" />
            <InfoField label="Clasificación" value="" />
            <InfoField label="Nombre" value="" />
          </Form>
          <Form title="Planificación">
            <InfoField label="Fecha Inicio" value="" />
            <InfoField label="Fecha Fin" value="" />
          </Form>
        </ConfirmDialog>
      )
    }

    handleAddTargetDialog = () => {
      this.props.toggleDialog(
        <ConfirmDialog title="Objetivos" onClose={this.handleCloseDialog} onCancel={this.handleCloseDialog}>
          <Form title="Primario">
            <InfoField label="Tipo" value="" />
            <InfoField label="Objetivo" value="" />
          </Form>
          <Form title="Secundario 1">
            <InfoField label="Tipo" value=""/>
            <InfoField label="Objetivo" value=""/>
          </Form>
          <Form title="Secundario 2">
            <InfoField label="Tipo" value=""/>
            <InfoField label="Objetivo" value=""/>
          </Form>
        </ConfirmDialog>
      )
    }

    handleAddSubCampaignDialog = () => {
      this.props.toggleDialog(
        <ConfirmDialog title="Nueva Subcampaña..." onClose={this.handleCloseDialog} onCancel={this.handleCloseDialog}>
          <Form title="Info">
            <InfoField label="Codigo" value="" />
            <InfoField label="Departamento" value="" />
            <InfoField label="Tipo" value=""/>
            <InfoField label="Nombre" value="" />
          </Form>
          <Form title="Planificación">
            <InfoField label="Inicio" value=""/>
            <InfoField label="Fin" value=""/>
          </Form>
        </ConfirmDialog>
      )
    }

    handleCloseDialog = () => {
      this.props.toggleDialog(null);
    }

  handleChangeTab = (tab) => {
    this.setState({ tab })
  }

  renderSubcampaign = (data) => {
    const title = `[${data.id}] ${data.type} - ${data.name}`;
    const actions = <span>{data.state}</span>
    return (
      <Panel className="infopanel" icon="import_contacts" title={title}  info="24 ... 27 Noviembre 2016" collapsable={true} open={false}  actions={actions}>
        <Header className="default-title" icon="timeline" title="Timeline" />
        <Timeline tokens={catalogTimeline} onTokenSelected={this.gotoTokenPage}/>
        <br/>
      </Panel>
    )
  }

  render() {

      const data = {
      	labels: [
      		'Prod. Gráfica',
      		'Medios',
      		'Otros'
      	],
      	datasets: [{
      		data: [200, 100, 900],
      		backgroundColor: [
      		'#FF6384',
      		'#36A2EB',
      		'#FFCE56'
      		],
      		hoverBackgroundColor: [
      		'#FF6384',
      		'#36A2EB',
      		'#FFCE56'
      		]
      	}]
      };

    const targetActions = [
      <Icon icon="add" action={this.handleAddTargetDialog}/>,
    ]
    const budgetActions = [
      <span style={{ margin: '0', fontSize: '1.4rem'}}>Total: 905.750,67€</span>
    ]
    const subcampaignsActions = <Header>
      <Select label="Agrupado por" options={subcampaignGroups} />
      <Icon icon="add" action={this.handleAddSubCampaignDialog} />
    </Header>


    const pageMenu = [
      { icon: 'edit' , label: 'Editar Info' },
      { icon: 'check', label: 'Tiene Medios'},
      { icon: 'assignment' , label: 'Enviar Briefing'},
    ]

    return (
      <Page>
        <div style={{ paddingLeft: '.4rem', display: 'flex', justifyContent: 'flex-start', alignContent: 'center', lineHeight: '1.1rem', color: '#20A867', fontWeight: '400', fontSize: '1.3rem', textAlign: 'left' }}>
          <span style={{ lineHeight: '1.5rem', margin: '0 .5rem'}}><span style={{ color: '#555', fontWeight: '200', display: 'none'}}>empresa:</span> El Corte Inglés</span> |
          <span style={{ lineHeight: '1.5rem', margin: '0 .5rem'}}><span style={{ color: '#555', fontWeight: '200', display: 'none'}}>grupo:</span> ECI/FV Verticales OI 2016 </span> |
          <span style={{ lineHeight: '1.5rem', margin: '0 .5rem'}}><span style={{ color: '#555', fontWeight: '200', display: 'none'}}>clasificación:</span> Fuerza de Venta/mixta </span>
        </div>
        <br/>
        <Toolbar icon="card_giftcard" className="pageBar" title="BLACK FRIDAY" menu={pageMenu}>
            <span style={{ lineHeight: '1.5rem', margin: '0 .5rem', display: 'flex', alignItems: 'center', fontWeight: '200', fontSize: '1.5rem'}}>
            <span style={{ color: '#555', fontWeight: '200', display: 'none'}}>desde:</span> 11-11-2016 /
            <span style={{ color: '#555', fontWeight: '200', display: 'none'}}>hasta:</span> 17-11-2016</span>
        </Toolbar>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'auto'}}>

        <Panel title="Objetivos" collapsable={true} collapsed={true} actions={targetActions}>
          <Panel className="infopanel" icon="flag" title="Venta Trafico --> Venta Tráfico (Generico)" collapsable={false} open={false} />
        </Panel>

        <Panel title="Seguimiento" collapsable={true} collapsed={true}>
          <div style={{ display: 'flex', padding: '1.6rem 5.6rem' }}>
            <label for="mktroi">Seguimiento MKT ROI</label>
            <input id="mktroi" type="checkbox" />
            <Select options={portadores}/>
          </div>
        </Panel>

        <Panel title="Gastos Por Departamento" collapsable={true} collapsed={false} actions={budgetActions}>
          <div style={{ display: 'flex'}}>
            <div style={{ flex: '1.3'}}>
              <Panel className="infopanel" icon="attach_money" title="Medios" actions={<span>813.098,58€</span>} collapsable={true} collapsed={true}>
              <div style={{ flex: 1, display: 'flex', justifyContent: 'space-around'}}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                  <Icon icon="tv" />
                  <label>TV</label>
                  <span>350.652,76</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                  <Icon icon="devices_other" />
                  <label>Internet</label>
                  <span>167.087,15</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                  <Icon icon="store" />
                  <label>Exterior</label>
                  <span>145.724,62</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                  <Icon icon="print" />
                  <label>Prensa</label>
                  <span>105.798,60</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                  <Icon icon="import_contacts" />
                  <label>Revista</label>
                  <span>0.00</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                  <Icon icon="radio" />
                  <label>Radio</label>
                  <span>40.127,82</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                  <Icon icon="movie" />
                  <label>Cine</label>
                  <span>0.00</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                  <Icon icon="video_call" />
                  <label>Producción</label>
                  <span>3.707,63</span>
                </div>
              </div>
              </Panel>
              <Panel className="infopanel" icon="attach_money" title="Prod. Gráfica y Realización" actions={<span>31.034,48€</span>} collapsable={true} collapsed={true}>
                <div style={{ flex: 1, display: 'flex', justifyContent: 'space-around'}}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                    <Icon icon="import_contacts" />
                    <label>Directa</label>
                    <span>0.00</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                    <Icon icon="photo_camera" />
                    <label>Fotografía</label>
                    <span>12.865,23</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                    <Icon icon="tv" />
                    <label>TV</label>
                    <span>14.235,98</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                    <Icon icon="headset" />
                    <label>Estudio Grabación</label>
                    <span>3.735,87</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                    <Icon icon="more_vertical" />
                    <label>Otros</label>
                    <span>197,40</span>
                  </div>
                </div>
              </Panel>
              <Panel className="infopanel" icon="attach_money" title="Resto" actions={<span>61.617,61€</span>} collapsable={true} collapsed={true}>
                <div style={{ flex: 1, display: 'flex', justifyContent: 'space-around'}}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                    <Icon icon="more_vertical" />
                    <label>Aportaciones</label>
                    <span>0,00</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                    <Icon icon="more_vertical" />
                    <label>PPV</label>
                    <span>61.617,61</span>
                  </div>
                </div>
              </Panel>
            </div>

            <div style={{ flex: '.7', }}>
              <Doughnut data={data} options={{ legend: { position: 'bottom' }}}/>
            </div>
          </div>
        </Panel>
        <br/>

        <Tabs selected={this.state.tab} onChange={this.handleChangeTab}>
          <Tab label="SUBCAMPAÑAS" />
          <Tab label="PROMOCIONES SGP" />
        </Tabs>

        <Stack selected={this.state.tab}>

          <div>
            {subcampaignsActions}
            {this.props.ctx.subcampaigns.map(this.renderSubcampaign)}
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

const portadores = [
  { label: '0306 - BLACK FRIDAY', value: '0001' },
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
