import React from 'react';

import { Page, Toolbar, Session, Dialog, ConfirmDialog } from 'tatami';
import { Icon, Button, Header, Panel, List, Select, Field } from 'seito';


import Form from '../components/form';

// controllers
import materials from '../controllers/materials';

class LAMP extends React.Component {

  state = {
    materials: [],
    activity: [],
  }

  componentWillMount() {
    materials.load((data) => {
      this.setState({ materials: data });
    });
  }

  back = () => {
    this.props.goto('CAMPAIGN');
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
      <div style={{ flex: 1, display: 'flex', alignItems: 'center'}}>
        <span className="flag-icon flag-icon-es flag-icon-squared"></span>
        &nbsp;
        <span className="flag-icon flag-icon-gb flag-icon-squared"></span>
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

    return (
      <Page>
        <div style={{ paddingLeft: '.4rem', display: 'flex', justifyContent: 'flex-start', alignContent: 'center', lineHeight: '1.1rem', color: '#20A867', fontWeight: '400', fontSize: '1.3rem', textAlign: 'left' }}>
          <span style={{ lineHeight: '1.5rem', margin: '0 .5rem'}}><span style={{ color: '#555', fontWeight: '200', display: 'none'}}>empresa:</span> El Corte Inglés</span> |
          <span style={{ lineHeight: '1.5rem', margin: '0 .5rem'}}><span style={{ color: '#555', fontWeight: '200', display: 'none'}}>grupo:</span> ECI/FV Verticales OI 2016 </span> |
          <span style={{ lineHeight: '1.5rem', margin: '0 .5rem'}}><span style={{ color: '#555', fontWeight: '200', display: 'none'}}>grupo:</span> Fuerza de Venta/mixta </span> |
        </div>

        <Toolbar className="pageBar" icon="assignment" title="[21800] Directa - Catálogo - Black Friday 2016 Canarias" />

        <Panel title="Materiales"  collapsable={false} collapsed={false} actions={icons}>
          <div style={{ display: 'flex'}}>
            <List data={materials} onSelection={this.handleEditDialog}/>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
            {this.renderActions()}
          </div>
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
