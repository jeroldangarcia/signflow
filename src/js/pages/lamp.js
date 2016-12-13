import React from 'react';

import Icon from '../components/icon';
import Page from '../components/page';
import Header from '../components/header';
import Panel from '../components/panel';
import List from '../components/list';
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
    const title =
      <div>
        <div style={{ paddingLeft: '.4rem', display: 'flex', justifyContent: 'flex-start', alignContent: 'center', lineHeight: '1.1rem', color: '#20A867', fontWeight: '400', fontSize: '1.3rem', textAlign: 'left' }}>
          <span style={{ lineHeight: '1.5rem', margin: '0 .5rem'}}><span style={{ color: '#555', fontWeight: '200', display: 'none'}}>empresa:</span> El Corte Inglés</span> |
          <span style={{ lineHeight: '1.5rem', margin: '0 .5rem'}}><span style={{ color: '#555', fontWeight: '200', display: 'none'}}>grupo:</span> [grupo campaña] </span> |
          <span style={{ lineHeight: '1.5rem', margin: '0 .5rem'}}><span style={{ color: '#555', fontWeight: '200', display: 'none'}}>grupo:</span> [campaña] </span> |
          <span style={{ lineHeight: '1.5rem', margin: '0 .5rem'}}><span style={{ color: '#555', fontWeight: '200', display: 'none'}}>clasificación:</span> [clasificacion] </span> |
        </div>
        <Header icon="assignment" action={this.back} title="SOLICITUD DE MATERIALES:" className="page-title" />
      </div>

    const materialsActions = session.rol() === 'ppv' ? [
      { icon: 'add', do: this.handleAddDialog },
    ] : '';

    const materials = this.state.materials.slice(0,5).map( material => {
      return {
        icon: 'recent_actors',
        title: material.mounting,
        cells: [ material.formats[0], 'Nike'],
        subtitle:
          <span>5uds / 100€  &nbsp;
            <Icon icon="edit" className="small" action={this.handleEditDialog}/>
            <Icon icon="delete" className="small" action={this.handleDeleteDialog}/>
          </span>,
      }
    })
    return (
      <Page title={title}>

        <Header title="[21800] Directa - Catálogo - Black Friday 2016 Canarias" className="page-subtitle"></Header>

        <Panel icon="recent_actors" title="Materiales" actions={materialsActions} collapsable={false} open={true}>

          <div style={{ display: 'flex'}}>
            <List data={materials} itemStyle="tablerow" selected={false}/>
          </div>

          <div style={{ display: 'flex'}}>
            <div style={{ flex: '1'}}>...</div>
            <div style={{ flex: '1', display: 'flex'}}><span style={{ flex: '1', display: 'flex', justifyContent: 'flex-end'}}>Total Campaña:&nbsp;</span><span>1000€</span></div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
            {this.renderActions()}
          </div>
        </Panel>


        <Panel icon="messages" title="Actividad" collapsable={true} open={false}>
          <List data={activity} itemStyle="tablerow" selected={false}/>
        </Panel>
      </Page>
    )
  }
}

const activity = [
  { icon: 'playlist_add', title:'<usuario1> añadio <material1>', subtitle:'01/10/2016'},
  { icon: 'playlist_add', title:'<usuario1> añadio <material2>', subtitle:'01/10/2016'},
  { icon: 'playlist_add', title:'<usuario1> añadio <material3>', subtitle:'01/10/2016'},
  { icon: 'playlist_add', title:'<usuario1> añadio <material4>', subtitle:'01/10/2016'},
  { icon: 'remove_circle_outline', title:'<usuario2> elimina <material4>', subtitle:'01/10/2016'},
  { icon: 'cloud_done', title:'<usuario2> aprueba <LAMP>', subtitle:'01/10/2016'},
  { icon: 'cloud_upload', title:'<usuario3> publica <LAMP>', subtitle:'01/10/2016'},
]

export default LAMP;
