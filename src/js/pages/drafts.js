import React from 'react';

// components
import { Page, Toolbar } from 'tatami';
import { Icon, FAB, Card, Header, Panel, List} from 'seito';

import { ConfirmDialog } from '../components/dialogs';
import Form from '../components/form';
import { Select } from '../components/field';
import { JobItem, JobCard } from '../components/job';

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
      <Page>
        <div style={{ paddingLeft: '.4rem', display: 'flex', justifyContent: 'flex-start', alignContent: 'center', lineHeight: '1.1rem', color: '#20A867', fontWeight: '400', fontSize: '1.3rem', textAlign: 'left' }}>
          <span style={{ lineHeight: '1.5rem', margin: '0 .5rem'}}><span style={{ color: '#555', fontWeight: '200', display: 'none'}}>empresa:</span> El Corte Inglés</span> |
          <span style={{ lineHeight: '1.5rem', margin: '0 .5rem'}}><span style={{ color: '#555', fontWeight: '200', display: 'none'}}>grupo:</span> [grupo campaña] </span> |
          <span style={{ lineHeight: '1.5rem', margin: '0 .5rem'}}><span style={{ color: '#555', fontWeight: '200', display: 'none'}}>grupo:</span> [campaña] </span> |
          <span style={{ lineHeight: '1.5rem', margin: '0 .5rem'}}><span style={{ color: '#555', fontWeight: '200', display: 'none'}}>clasificación:</span> [clasificacion] </span> |
        </div>

        <Toolbar icon="inbox" title="Bandeja Entrada: Bocetos" className="pageBar" />

        <div style={{ overflow: 'auto'}}>
          <Panel title="Pendientes" collapsed={false}>
            <JobItem ticket="0306 2019 0001 0001" title="Banderola GlassPack 60x140" motif="Nike"/>
            <JobItem ticket="0306 2019 0001 0001" title="Banderola GlassPack 60x140" motif="Adidas"/>
            <JobItem ticket="0306 2019 0001 0002" title="Canal Medio 200x100"  motif="Nike"/>
            <JobItem ticket="0306 2019 0001 0003" title="Cartón Compacto 3mm"  motif="Nike"/>
          </Panel>
          <Panel title="Asignados">
            <JobItem ticket="0306 2019 0001 0004" title="Cartulina 12cm"  motif="Nike" img="cartel2.jpeg"/>
          </Panel>
          <Panel title="Terminados">
            <JobCard ticket="0306 2019 0001 0006" title="Cartulina Folding 48x78"  motif="Nike" img="cartel1.jpeg"/>
          </Panel>
          <br/>
          <br/>
          <br/>
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
