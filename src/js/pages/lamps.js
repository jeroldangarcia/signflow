import React from 'react';

// components
import { Page, Toolbar } from 'tatami';
import { Icon, FAB, Header, GroupList, Select } from 'seito';

import { ConfirmDialog } from '../components/dialogs';
import { SearchBox } from '../components/field';
import Form from '../components/form';

// controller
import controller from '../controllers/lamps';
import promotions from '../controllers/promotions';

/**
 * LAMPS Page
 */
class LAMPS extends React.Component {

  state = {
    items: [],
    groupBy: 'state',
    searching: false,
    search: '',
  }

  componentWillMount() {
    controller.load((items) => {
      this.setState({ items });
    });
  }

  handleAddDialog = () => {
    controller.load((promotions) => {
      const options = promotions.map(promotion => {
        return { label: promotion.title , value: promotion.id }
      });
      this.props.toggleDialog(
        <ConfirmDialog title="Crear LAMP..." onClose={this.handleCloseDialog} onCancel={this.handleCloseDialog}>
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

  gotoLAMPS = () => {
    this.props.goto('PROMOTIONS');
  }

  goto = () => {
    this.props.goto('ORDERS');
  }

  handleGroupCriteria = (id,value) => {
    this.setState({ groupBy: value });
  }

  toggleSearch = () => {
    this.setState({ searching: !this.state.searching });
  }

  handleSearch = (id, value) => {
    this.setState({ search: value });
  }

  render () {

    const searchBox = this.state.searching ? <div style={{ display: 'flex'}}>
      <SearchBox onChange={this.handleSearch} />
    </div> : '';

    const data = this.state.items.filter( item => {
      return this.state.search ? item.title.toUpperCase().indexOf(this.state.search.toUpperCase()) >= 0 : true;
    });

    return (
      <Page>
        <Toolbar className="pageBar" icon="inbox" title="SOLICITUDES de MATERIALES">
          <Select id="groupBy" label="Agrupadas por: " options={groupCriterias} onChange={this.handleGroupCriteria}/>
          <Icon icon="search" action={this.toggleSearch}/>
        </Toolbar>
        {searchBox}
        <GroupList data={solicitudes} onPrimaryAction={this.handleItemSelected}/>
        <FAB icon="add" action={this.handleAddDialog} />
      </Page>
    );
  }
};

const groupCriterias = [
  { label: 'Estado', value: 'state' },
  { label: 'Campaña', value: 'campaign' },
  { label: 'Año', value: 'year' },
]

  const solicitudes = [
    { id: '0', label: 'Creada', items: [
      { id: '01', icon: 'assignment', label: '[21800] Directa - Catálogo - Black Friday 2016', caption: '0000 / 00000', info: '10/11/2016' },
    ]},
    { id: '1', label: 'Propuesta', items: [
      { id: '22', icon: 'assignment', label: 'Directa - Catálogo - Black Friday 2016', caption: '21800', info: '10/11/2016' },
      { id: '22', icon: 'assignment', label: 'Directa - Catálogo - Black Friday 2016 Cataluña', caption: '21800', info: '10/11/2016' },
      { id: '22', icon: 'assignment', label: 'Directa - Catálogo - Black Friday 2016 Canarias', caption: '21800', info: '10/11/2016' },
    ]},
    { id: '2', label: 'Aprobada', items: [
      { id: '11', icon: 'assignment', label: '[21800] Directa - Catálogo - Black Friday 2016', caption: '0000 / 00000', info: '10/11/2016' },
    ]},
    { id: '3', label: 'Pendiente Aprobación', items: [
      { id: '33', icon: 'assignment', label: '[21800] Directa - Catálogo - Black Friday 2016', caption: '0000 / 00000', info: '10/11/2016' },
      { id: '33', icon: 'assignment', label: '[21800] Directa - Catálogo - Black Friday 2016', caption: '0000 / 00000', info: '10/11/2016' },
    ]},
  ]


export default LAMPS;
