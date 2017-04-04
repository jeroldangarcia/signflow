import React from 'react';

import { Page, Toolbar, Session, Dialog, ConfirmDialog } from 'tatami';
import { Icon, Button, Header, Panel, List, Form, Select, Field, Tabs, Tab, Stack} from 'seito';

// controllers
import materials from '../controllers/materials';

class LAMP extends React.Component {

  state = {
    materials: [],
    activity: [],
    tab: this.props.tab ? this.props.tab : 0,
  }

  componentWillMount() {
    materials.load((data) => {
      this.setState({ materials: data });
    });
  }

  back = () => {
    this.props.goto('CAMPAIGN');
  }

  handleChangeTab = (tab) => {
    this.setState({ tab })
  }

  handleAddDialog = () => {
    this.props.toggleDialog(
      <ConfirmDialog title="Seleccion Material..." onClose={this.handleCloseDialog} onCancel={this.handleCloseDialog}>
        <Form title="Material">
          <Field label="Soporte" value=""/>
          <Field label="Tamaño" value=""/>
        </Form>
      </ConfirmDialog>
    )
  }

  handleDeleteDialog = () => {
    this.props.toggleDialog(
      <ConfirmDialog title="Retirar Material..." onClose={this.handleCloseDialog} onCancel={this.handleCloseDialog}>
        El material sera retirado de esta solicitud.
      </ConfirmDialog>
    )
  }

  handleEditDialog = (material) => {
    this.props.toggleDialog(
      <ConfirmDialog title="Editar Material..." onClose={this.handleCloseDialog} onCancel={this.handleCloseDialog}>
        <Form title="Material">
          <Field label="Soporte" value="" readOnly={true}/>
          <Field label="Tamaño" value="" readOnly={true}/>
          <Field label="Motivo" value=""/>
        </Form>
        <Form title="Distribución">
          <Field label="Idiomas" value=""/>
          <Field label="Unidades" value=""/>
        </Form>
      </ConfirmDialog>
    )
  }

  handleCloseDialog = () => {
    this.props.toggleDialog(null);
  }

  renderActions = () => {
    const me = Session.me();
    const actionsFor = {
      'marketing' : [
        <Button icon="done" label="Comentar" className="secondary"/>,
        <Button icon="done" label="Aprobar" className="primary"/>
      ],
      'ppv' : [
        <Button icon="done" label="Comentar" className="secondary"/>,
        <Button icon="cloud_upload" label="Publicar" className="primary"/>,
      ]
    }
    const role = me.rol;
    return actionsFor[role];
  }

  render () {

    const iconsFor = Session.me().rol === 'ppv' ? [
      <Icon icon='add' action={this.handleAddDialog }/>
    ] : '';

    const icons = [<span style={{ margin: '0', fontSize: '1.4rem'}}>Estimación: 500€</span>].concat(iconsFor);
    const info = (
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', fontSize: '1.5rem'}}>
        <span className="flag-icon flag-icon-es flag-icon-squared"></span>
        &nbsp;
        <span className="flag-icon flag-icon-es-ct flag-icon-squared"></span>
        &nbsp;&nbsp;&nbsp;
        <span>5uds / 100€</span>
      </div>
    )
    const materials = this.state.materials.slice(0,5).map((material,index) => {
      return {
        id: '1',
        caption: '000 00000',
        icon: 'photo',
        label: `${material.mounting} ${material.formats[0]}`,
        subtitle: 'Nike',
        info: info,
        action: { icon: 'delete', do: this.handleDeleteDialog }
      }
    })

    const seguimiento = [
      <span style={{ display: 'flex', margin: '0', fontSize: '1.4rem'}}>
        <Icon icon="message" badge="5"/>
        <Icon icon="supervisor_account" decorator="filter_3"/>
      </span>
    ].concat(iconsFor);

    return (
      <Page className="scrollable">
        <Icon icon="message" badge="5"/>
        <div style={{ paddingLeft: '.4rem', paddingTop:'.5rem', display: 'flex', justifyContent: 'flex-start', alignContent: 'center', lineHeight: '1.1rem', color: '#20A867', fontWeight: '400', fontSize: '1.3rem', textAlign: 'left' }}>
          <span style={{ lineHeight: '1.5rem', margin: '0 .5rem'}}><span style={{ color: '#555', fontWeight: '200', display: 'none'}}>empresa:</span> El Corte Inglés</span> |
          <span style={{ lineHeight: '1.5rem', margin: '0 .5rem'}}><span style={{ color: '#555', fontWeight: '200', display: 'none'}}>grupo:</span> ECI/FV Verticales OI 2016 </span> |
          <span style={{ lineHeight: '1.5rem', margin: '0 .5rem'}}><span style={{ color: '#555', fontWeight: '200', display: 'none'}}>grupo:</span> Fuerza de Venta/mixta </span> |
        </div>

        <Toolbar className="pageBar" icon="assignment" title="[21800] Directa - Catálogo - Black Friday 2016 Canarias" />

        <Panel title="Briefing subcampaña" collapsable={false} collapsed={false}>

              <Header title="Centros" />
              <div style={{ border: 'solid 1px #eee',margin: '0 4.6rem', minHeight: '3rem', display: 'flex' }}>
                {['Castellana', 'H.Meridiana', 'León'].map(item => {
                  return (
                    <span className="badge" style={{ backgroundColor: '#456', maxWidth: '10rem',padding: '1rem', margin:'0 1rem 0 0'}}>
                      {item}
                    </span>
                  )
                })}
              </div>

              <Header title="Divisiones" />
              <div style={{ border: 'solid 1px #eee',margin: '0 4.6rem', minHeight: '3rem', display: 'flex' }}>
                {['Infantil', 'Mujer', 'Perfumería'].map(item => {
                  return (
                    <span className="badge" style={{ backgroundColor: '#456', maxWidth: '10rem', padding: '1rem', margin:'0 1rem 0 0'}}>
                      {item}
                    </span>
                  )
                })}
              </div>
        </Panel>

        <br/><br/>

        <Panel title="Materiales" collapsable={false} collapsed={false} actions={icons}>
          <div style={{ display: 'flex', flexDirection: 'column'}}>
            <Panel className="infopanel noicon" actions={<span>| Idiomas | unidades | $ |</span>} collapsed={false} collapsable={false} />
            <List data={materials} onSelection={this.handleEditDialog}/>
            <Panel className="infopanel noicon" actions={<span style={{ fontSize: '1.4rem', fontWeight: '600'}} collapsed={false} collapsable={false}>25uds | 500€</span>}/>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
            {this.renderActions()}
          </div>
        </Panel>

        <br/><br/>

        <Panel title="Seguimiento" collapsed={true} actions={seguimiento}>
        <Tabs selected={this.state.tab} onChange={this.handleChangeTab}>
          <Tab label="Comentarios" />
          <Tab label="Actividad" />
        </Tabs>
        <Stack selected={this.state.tab}>
          <div> Comentarios </div>
          <div>

            <main style={{ borderTop: '1px dotted #CCC', paddingTop: '2rem'}}>
              <aside>
                <span><span className="grey">&nbsp; 10/10/2016 &nbsp;</span><Icon className="small red step" icon="subdirectory_arrow_left" /></span>
                <div style={{ border: 'dashed 2px #CCC', width: '2px', flex: '1', marginRight: '1.3rem'}} />
              </aside>
              <section>
                <span>
                  <Icon className="thumb tiny" icon="person" />
                  <span className="subtitle">&nbsp;&nbsp;Paco Mercado</span><span> ha asignado el Trabajo </span><span className="subtitle">a Daniel García <Icon className="thumb tiny" icon="person" /></span>
                </span>
              </section>
            </main>

            <main>
              <aside>
                <span><span className="grey">&nbsp; 10/10/2016 &nbsp;</span><Icon className="small blue step" icon="done" /></span>
                <div style={{ border: 'dashed 2px #CCC', width: '2px', flex: '1', marginRight: '1.3rem'}} />
              </aside>
              <section>
                <span>
                  <Icon className="thumb small" icon="person" />
                  <span className="subtitle">&nbsp;&nbsp;Daniel Garcia</span><span> ha terminado el Trabajo </span>
                </span>
              </section>
            </main>

            <main>
              <aside>
                <span><span className="grey">&nbsp; 10/10/2016 &nbsp;</span><Icon className="small green step" icon="done_all" /></span>
              </aside>
              <section>
                <span>
                  <Icon className="thumb small" icon="person" />
                  <span className="subtitle">&nbsp;&nbsp;Paco Mercado</span><span> ha validado el Trabajo </span>
                </span>
              </section>
            </main>

          </div>
        </Stack>
      </Panel>
      </Page>
    )
  }
}

export default LAMP;

const providerType = [
    { label: 'más barato', value: '1' },
    { label: 'más rapido', value: '2' },
    { label: 'menor carga', value: '3' },
]

const providers = [
    { icon: 'store', title:'Proveedor 1', subtitle:'load: 100%', info: '100$'},
    { icon: 'store', title:'Proveedor 2', subtitle:'load: 200%', info: '200$'},
    { icon: 'store', title:'Proveedor 3', subtitle:'load: 50%', info: '300$'},
    { icon: 'store', title:'Proveedor 4', subtitle:'load: 20%', info: '320$'},
    { icon: 'store', title:'Proveedor 6', subtitle:'load: 40%', info: '350$'},
    { icon: 'store', title:'Proveedor 7', subtitle:'load: 120%', info: '400$'},
    { icon: 'store', title:'Proveedor 8', subtitle:'load: 0%', info: '410$'},
]
