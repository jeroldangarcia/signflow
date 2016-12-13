import React from 'react';

// components
import Page from '../components/page';
import Header from '../components/header';
import Drawer from '../components/drawer';
import Icon from '../components/icon';
import List from '../components/list';
import Panel from '../components/panel';

import { FAB } from '../components/button';
import { ConfirmDialog } from '../components/dialogs';
import Form from '../components/form';
import { Select } from '../components/field';

// controller
import controller from '../controllers/lamps';
import promotions from '../controllers/promotions';
import materials from '../controllers/materials';

/**
 * DRAFTS Page
 */
class DRAFTS extends React.Component {

  state = {
    materials: [],
    items: [],
  }

  componentWillMount() {
    materials.load((data) => {
      this.setState({ materials: data });
    });
  }

  handleAddDialog = () => {
    controller.load((promotions) => {
      const options = promotions.map(promotion => {
        return { label: promotion.title , value: promotion.id }
      });
      this.props.toggleDialog(
        <ConfirmDialog title="Nuevo Boceto..." onClose={this.handleCloseDialog} onCancel={this.handleCloseDialog}>
          <Form>
            <Select label="Promocion" options={options}></Select>
          </Form>
        </ConfirmDialog>
      )
    })
  }

  handleCloseDialog = () => {
    this.props.toggleDialog(null);
  }

  handleItemSelected = () => {
    this.props.goto('LAMP');
  }

  exit = () => {
    this.props.goto('SPLASH');
  }

  goto = () => {
    this.props.goto('PROMOTIONS');
  }

  goto = () => {
    this.props.goto('ORDERS');
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
        <Header icon="brush" action={this.back} title="BOCETOS:" className="page-title" />
      </div>
    const materials = this.state.materials.slice(0,5).map( material => {
      return {
        icon: 'recent_actors',
        title: material.mounting,
        cells: [ material.formats[0], 'Nike'],
        subtitle:
          <span>5uds / 100€  &nbsp;

          </span>,
      }
    })
    return (
      <Page title={title}>
        <div style={{ display: 'flex'}}>
            <List data={materials} itemStyle="listItem" selected={false}/>
          <div style={{ flex: '2'}}>....</div>
        </div>
      </Page>
    );
  }

};

const activity = [
  { icon: 'playlist_add', title:'<usuario1> añadio <material1>', subtitle:'01/10/2016'},
  { icon: 'playlist_add', title:'<usuario1> añadio <material2>', subtitle:'01/10/2016'},
  { icon: 'playlist_add', title:'<usuario1> añadio <material3>', subtitle:'01/10/2016'},
  { icon: 'playlist_add', title:'<usuario1> añadio <material4>', subtitle:'01/10/2016'},
  { icon: 'remove_circle_outline', title:'<usuario2> elimina <material4>', subtitle:'01/10/2016'},
  { icon: 'cloud_done', title:'<usuario2> aprueba <LAMP>', subtitle:'01/10/2016'},
  { icon: 'cloud_upload', title:'<usuario3> publica <LAMP>', subtitle:'01/10/2016'},
]


export default DRAFTS;
