import React from 'react';

// components
import { Page, Toolbar } from 'tatami';
import { Header, List } from 'seito';

import Icon from '../components/icon';
import { FAB } from '../components/button';
import { ConfirmDialog } from '../components/dialogs';
import Form from '../components/form';
import { Select, SearchBox } from '../components/field';

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

    const title = <div style={{ display: 'flex' }}>
                    <span>SOLICITUDES DE MATERIALES</span>
                  </div>

    const header =  <Header icon="assignment" decorator="inbox" title={title} className="page-title" >
                      <Select id="groupBy" label="agrupar por: " options={groupCriterias} onChange={this.handleGroupCriteria}/>
                      <Icon icon="search" action={this.toggleSearch}/>
                    </Header>;

    const searchBox = this.state.searching ? <div style={{ display: 'flex'}}>
      <SearchBox onChange={this.handleSearch} />
    </div> : '';

    const data = this.state.items.filter( item => {
      return this.state.search ? item.title.toUpperCase().indexOf(this.state.search.toUpperCase()) >= 0 : true;
    });

    return (
      <Page title={header}>
        {searchBox}
        <List data={data} onSelected={this.handleItemSelected} groupBy={this.state.groupBy} />
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

export default LAMPS;
