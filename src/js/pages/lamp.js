import React from 'react';

import { Page, Toolbar } from 'tatami';
import { Icon, Header, Panel, List } from 'seito';

import { Button } from '../components/button';
import { InfoField } from '../components/field';
import { ConfirmDialog } from '../components/dialogs';
import Form from '../components/form';

// controllers
import materials from '../controllers/materials';

// stores
import session from '../stores/session';

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
      <ConfirmDialog title="Editar Material..." onClose={this.handleCloseDialog} onCancel={this.handleCloseDialog}>
        <Form title="Material">
          <InfoField label="Soporte" value=""/>
          <InfoField label="Tamaño" value=""/>
          <InfoField label="Motivo" value=""/>
        </Form>
        <Form title="Simulación coste">
          <InfoField label="Unidades" value=""/>
          <InfoField label="Proveedor" value=""/>
          <InfoField label="Precio (€)" value=""/>
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

  handleEditDialog = () => {
    this.props.toggleDialog(
      <ConfirmDialog title="Editar Material..." onClose={this.handleCloseDialog} onCancel={this.handleCloseDialog}>
        <Form title="Material">
          <InfoField label="Soporte" value="Banderola Glasspack"/>
          <InfoField label="Tamaño" value="60x140"/>
          <InfoField label="Motivo" value="Nike"/>
        </Form>
        <Form title="Simulación coste">
          <InfoField label="Unidades" value="5"/>
          <InfoField label="Proveedor" value="Proveedor 1"/>
          <InfoField label="Precio (€)" value="100"/>
        </Form>
      </ConfirmDialog>
    )
  }

  handleCloseDialog = () => {
    this.props.toggleDialog(null);
  }

  renderActions = () => {
    const actionsFor = {
      'marketing' : [
        <Button icon="done" label="Comentar" className="secondary"/>,
        <Button icon="done" label="Aprobar" className="primary"/>
      ],
      'ppv' : [
        <Button icon="done" label="Comentar" className="secondary"/>,
        <Button icon="cloud_upload" label="Publicar" className="primary"/>,
        <Button icon="" label="Dotar Centros" className="accent"/>
      ]
    }
    const role = session.rol();
    return actionsFor[role];
  }

  render () {

    const materialsActions = session.rol() === 'ppv' ? [
      { icon: 'add', do: this.handleAddDialog },
    ] : '';

    const materials = this.state.materials.slice(0,5).map( (material,index) => {
      const m = {
        id: '1',
        caption: '000 00000',
        icon: 'photo',
        label: `${material.mounting} ${material.formats[0]}`,
        subtitle: 'Nike',
        info: '5uds / 100€',
      }

      return m;
    })
    return (
      <Page>

        <div style={{ paddingLeft: '.4rem', display: 'flex', justifyContent: 'flex-start', alignContent: 'center', lineHeight: '1.1rem', color: '#20A867', fontWeight: '400', fontSize: '1.3rem', textAlign: 'left' }}>
          <span style={{ lineHeight: '1.5rem', margin: '0 .5rem'}}><span style={{ color: '#555', fontWeight: '200', display: 'none'}}>empresa:</span> El Corte Inglés</span> |
          <span style={{ lineHeight: '1.5rem', margin: '0 .5rem'}}><span style={{ color: '#555', fontWeight: '200', display: 'none'}}>grupo:</span> [grupo campaña] </span> |
          <span style={{ lineHeight: '1.5rem', margin: '0 .5rem'}}><span style={{ color: '#555', fontWeight: '200', display: 'none'}}>grupo:</span> [campaña] </span> |
          <span style={{ lineHeight: '1.5rem', margin: '0 .5rem'}}><span style={{ color: '#555', fontWeight: '200', display: 'none'}}>clasificación:</span> [clasificacion] </span> |
        </div>

        <Toolbar className="pageBar" icon="assignment" title="[21800] Directa - Catálogo - Black Friday 2016 Canarias" />

        <Panel title="Materiales"  collapsable={false} collapsed={false}>

          <div style={{ display: 'flex'}}>
            <List data={materials} />
          </div>

          <div style={{ display: 'flex'}}>
            <div style={{ flex: '1'}}>...</div>
            <div style={{ flex: '1', display: 'flex'}}><span style={{ flex: '1', display: 'flex', justifyContent: 'flex-end'}}>Total Campaña:&nbsp;</span><span>1000€</span></div>
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
