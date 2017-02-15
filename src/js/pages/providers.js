import React from 'react';

import { Page, Toolbar, ConfirmDialog, Inbox, SearchBox } from 'tatami';
import { Icon, List, Swapable, Field, HCard, Button, Panel, Tabs, Tab, Stack } from 'seito';
import { MaterialListItem, MaterialInboxItem, MaterialCard } from '../components/material';

import API from '../api/apiClient';
import './providers.scss';

const loadMaterials = (params, done) => {
  API.materials((data) => {
    done({ materials: data.slice(0,5) });
  }, (error) => {
    console.log(error);
  })
}

class Providers extends React.Component {

  static defaultProps = {
    inputAction : loadMaterials,
  }

  state = {
    provision: null,
  }

  handleSelect = (item) => {
    console.log(item)
    this.setState({ provision: item });
  }

  handleUnSelect = () => {
    this.setState({ provision: null });
  }

  handleProviderDialog = (material) => {
    const onClose = () => { this.props.toggleDialog(null) };
    const providers = material.providers.map(provider => {
      return { icon: 'store', label: provider.name }
    })
    this.props.toggleDialog(
      <ConfirmDialog title="Seleccion Proveedor" onClose={onClose} onCancel={onClose}>
        <List data={providers}></List>
      </ConfirmDialog>
    );
  }

  render() {
    const materials = this.props.ctx.materials ? this.props.ctx.materials : [];
    const items = (
      <div>
        <Panel title="Pendientes" actions={<div>5</div>}>
          <List data={materials} renderer={MaterialInboxItem} onSelection={this.handleSelect}/>
        </Panel>
        <Panel title="Aprobados" actions={<div>10</div>}>
          <List data={materials} renderer={MaterialInboxItem} onSelection={this.handleSelect}/>
        </Panel>
      </div>
    )
    const viewer = this.state.provision ? <MaterialCard {...this.state.provision} toggleDialog={this.props.toggleDialog} title="Provision GlassPack" /> : '';

    return (
      <Page className="providers">
        <Toolbar icon="burst_mode" title="Provisión de Materiales" className="pageBar">
          <Field label="Agrupar por" value="Estado" />
          <Icon icon="search" />
        </Toolbar>
        <Inbox items={items} viewer={viewer} onCloseViewer={this.handleUnSelect}/>
      </Page>
    )
  }
}

export default Providers;
