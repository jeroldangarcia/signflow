import React from 'react';

// components
import { Page, Toolbar, Inbox } from 'tatami';
import { Icon, FAB, Card, Header, Panel, List, Select} from 'seito';

import { ConfirmDialog } from '../components/dialogs';
import Form from '../components/form';
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



    const list = [
      <Panel title="Pendientes" collapsed={false}>
        <JobItem ticket="0306 2019 0001 0001" title="Banderola GlassPack 60x140" motif="Nike"/>
        <JobItem ticket="0306 2019 0001 0001" title="Banderola GlassPack 60x140" motif="Adidas"/>
        <JobItem ticket="0306 2019 0001 0002" title="Canal Medio 200x100"  motif="Nike"/>
        <JobItem ticket="0306 2019 0001 0003" title="Cartón Compacto 3mm"  motif="Nike"/>
      </Panel>,
      <Panel title="Asignados">
        <JobItem ticket="0306 2019 0001 0004" title="Cartulina 12cm"  motif="Nike" img="cartel2.jpeg"/>
      </Panel>,
      <Panel title="Terminados">
        <JobCard ticket="0306 2019 0001 0006" title="Cartulina Folding 48x78"  motif="Nike" img="cartel1.jpeg"/>
      </Panel>,
    ];

    const viewer = (
      <JobCard ticket="0306 2019 0001 0006" title="Cartulina Folding 48x78"  motif="Nike" img="cartel1.jpeg"/>
    )

    return (
      <Page>
        <Toolbar icon="burst_mode" title="Bocetos:" className="pageBar">
          <Select label="Ver como" options={views} />
          &nbsp;|&nbsp;
          <Select label="Agrupado por" options={groupBy} />
        </Toolbar>
        <Inbox list={list} viewer={viewer} />
      </Page>
    );
  }

};

const views = [
  { label: 'Lista', value: 1},
  { label: 'Tabla', value: 2},
  { label: 'Mosaico', value: 3},
]

const groupBy = [
  { label: 'Estado', value: 1 },
  { label: 'Campañas', value: 2 },
]


export default DRAFTS;
