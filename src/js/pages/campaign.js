import React from 'react';

// 3rd
import {Line, Doughnut} from 'react-chartjs-2';

// components
import { Page, Toolbar } from 'tatami';
import { Icon, Button, Header, Panel } from 'seito';

import Form from '../components/form';
import { Select, InfoField } from '../components/field';
import Timeline from '../components/timeline';
import { ConfirmDialog } from '../components/dialogs';

/**
 * Campaign Page
 */
class Campaign extends React.Component {

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
      <span style={{ margin: '0', fontSize: '1.4rem'}}>Total: 1200€</span>
    ]
    const subcampaignsActions = [
      <Select label="Agrupado por" options={subcampaignGroups} />,
      <Icon icon="add" action={this.handleAddSubCampaignDialog} />,
    ]

    const pageMenu = [
      { icon: 'check', label: 'Tiene Medios'},
      { icon: 'send' , label: 'Enviar Briefing'},
    ]

    return (
      <Page>

        <div style={{ paddingLeft: '.4rem', display: 'flex', justifyContent: 'flex-start', alignContent: 'center', lineHeight: '1.1rem', color: '#20A867', fontWeight: '400', fontSize: '1.3rem', textAlign: 'left' }}>
          <span style={{ lineHeight: '1.5rem', margin: '0 .5rem'}}><span style={{ color: '#555', fontWeight: '200', display: 'none'}}>empresa:</span> El Corte Inglés</span> |
          <span style={{ lineHeight: '1.5rem', margin: '0 .5rem'}}><span style={{ color: '#555', fontWeight: '200', display: 'none'}}>grupo:</span> [grupo campaña] </span> |
          <span style={{ lineHeight: '1.5rem', margin: '0 .5rem'}}><span style={{ color: '#555', fontWeight: '200', display: 'none'}}>clasificación:</span> [clasificacion] </span> |
        </div>

        <Toolbar icon="card_membership" className="pageBar" title="BLACK FRIDAY" menu={pageMenu}>
            <span style={{ lineHeight: '1.5rem', margin: '0 .5rem', display: 'flex', alignItems: 'center', fontWeight: '200', fontSize: '1.5rem'}}>
            <span style={{ color: '#555', fontWeight: '200', display: 'none'}}>desde:</span> 11-11-2016 /
            <span style={{ color: '#555', fontWeight: '200', display: 'none'}}>hasta:</span> 17-11-2016</span>
            <Icon icon="edit" className="small" action={this.handleInfoDialog}/>
        </Toolbar>

        <Panel title="Objetivos" collapsable={false} collapsed={false} actions={targetActions}>
          <Panel className="infopanel" icon="flag" title="Fidelización --> Vinculación de Clientes" collapsable={false} open={false} />
          <Panel className="infopanel" icon="flag" title="Vinculacion --> Compra Declarada"         collapsable={false} open={false} />
        </Panel>

        <Panel title="Seguimiento" collapsable={false} collapsed={false}>
          <div style={{ display: 'flex', padding: '1.6rem 5.6rem' }}>
            <label for="mktroi">Seguimiento MKT ROI</label>
            <input id="mktroi" type="checkbox" />
            <Select options={portadores}/>
          </div>
        </Panel>

        <Panel title="Gastos Por Departamento" collapsable={false} collapsed={false} actions={budgetActions}>
          <div style={{ display: 'flex'}}>
            <div style={{ flex: '1.3'}}>
              <Panel className="infopanel" icon="attach_money" title="Prod. Gráfica y Realización" actions={<span>200€</span>} collapsable={true} collapsed={false}>
                <div style={{ flex: 1, display: 'flex', justifyContent: 'space-around'}}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                    <Icon icon="import_contacts" />
                    <label>Catalogo</label>
                    <span>0.00</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                    <Icon icon="photo_camera" />
                    <label>Fotografía</label>
                    <span>0.00</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                    <Icon icon="tv" />
                    <label>TV</label>
                    <span>0.00</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                    <Icon icon="headset" />
                    <label>Estudio Grabación</label>
                    <span>0.00</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                    <Icon icon="more_vertical" />
                    <label>Otros</label>
                    <span>0.00</span>
                  </div>
                </div>
              </Panel>
              <Panel className="infopanel" icon="attach_money" title="Medios" actions={<span>100€</span>} collapsable={true} collapsed={true}>
                <div style={{ flex: 1, display: 'flex', justifyContent: 'space-around'}}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                    <Icon icon="tv" />
                    <label>TV</label>
                    <span>0.00</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                    <Icon icon="devices_other" />
                    <label>Internet</label>
                    <span>0.00</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                    <Icon icon="store" />
                    <label>Exterior</label>
                    <span>0.00</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                    <Icon icon="print" />
                    <label>Prensa</label>
                    <span>0.00</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                    <Icon icon="import_contacts" />
                    <label>Revista</label>
                    <span>0.00</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                    <Icon icon="radio" />
                    <label>Radio</label>
                    <span>0.00</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                    <Icon icon="movie" />
                    <label>Cine</label>
                    <span>0.00</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                    <Icon icon="video_call" />
                    <label>Producción</label>
                    <span>0.00</span>
                  </div>
                </div>
              </Panel>
              <Panel className="infopanel" icon="attach_money" title="Resto" actions={<span>900€</span>} collapsable={true} collapsed={true}>
                ...
              </Panel>
            </div>

            <div style={{ flex: '.7', }}>
              <Doughnut data={data} options={{ legend: { position: 'bottom' }}}/>
            </div>
          </div>
        </Panel>

        <Panel title="SubCampañas" collapsable={false} collapsed={false} actions={subcampaignsActions}>

          <Panel className="infopanel" icon="import_contacts" title="[21997] Directa - Flyer - PS4"  info="24 ... 27 Noviembre 2016" collapsable={true} open={false}>
            <Header className="default-title" icon="timeline" title="Timeline" />
            <Timeline tokens={catalogTimeline} onTokenSelected={this.gotoTokenPage}/>
            <br/>
          </Panel>

          <Panel className="infopanel" icon="import_contacts" title="[21800] Directa - Catálogo - Black Friday 2016 Canarias"  info="24 ... 27 Noviembre 2016" collapsable={true} open={false}>
            <Header className="default-title" icon="timeline" title="Timeline" />
            <Timeline tokens={catalogTimeline} onTokenSelected={this.gotoTokenPage}/>
            <br/>
          </Panel>

          <Panel className="infopanel" icon="import_contacts" title="[21434] Directa - Triptico - Black Friday Especial (Solo Centros)"  info="24 ... 27 Noviembre 2016" collapsable={true} open={false}>
            <Header className="default-title" icon="timeline" title="Timeline" />
            <Timeline tokens={catalogTimeline} onTokenSelected={this.gotoTokenPage}/>
            <br/>
          </Panel>

          <Panel className="infopanel" icon="import_contacts" title="[20062] Producción - Lona - Black Friday 2016"  info="24 ... 27 Noviembre 2016" collapsable={true} open={false}>
            <Header className="default-title" icon="timeline" title="Timeline" />
            <Timeline tokens={campaignsTimeline} onTokenSelected={this.gotoTokenPage}/>
            <br/>
          </Panel>

        </Panel>

        <Panel title="Promociones SGP" collapsable={true} collapsed={true}>
          <Panel className="infopanel" icon="card_giftcard" title="PromoFans GranCasa Black Friday"  info="23 Noviembre ... 11 Diciembre 2016" collapsable={false} open={false} />
          <Panel className="infopanel" icon="card_giftcard" title="Black Friday: Club del Gourmet 2016"  info="24 ... 27 Noviembre 2016" collapsable={false} open={false} />
          <Panel className="infopanel" icon="card_giftcard" title="Black Friday: Supermercado"  info="24 ... 27 Noviembre 2016" collapsable={false} open={false} />
          <Panel className="infopanel" icon="card_giftcard" title="Black Friday 2016"  info="24 ... 27 Noviembre 2016" collapsable={false} open={false} />
          <Panel className="infopanel" icon="card_giftcard" title="Mascotas Black Friday"  info="23 Noviembre ... 11 Diciembre 2016" collapsable={false} open={false} />
          <Panel className="infopanel" icon="card_giftcard" title="Super Black Friday"  info="23 Noviembre ... 11 Diciembre 2016" collapsable={false} open={false} />
        </Panel>
      </Page>

    )
  }
}

const subcampaignGroups = [
  { label: 'Departamento', value: '0002' },
  { label: 'Trabajo', value: '0001' },
]

const portadores = [
  { label: '[0001] - [portador]', value: '0001' },
  { label: '[0002] - [portador]', value: '0002' },
  { label: '[0003] - [portador]', value: '0003' },
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
  { label: 'Dotaciones',  icon: 'recent_actors',  state: 'stopped'  },
  { label: 'Bocetos',     icon: 'brush',          state: 'stopped' },
  { label: 'Arte Final',  icon: 'burst_mode',     state: 'stopped' },
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
