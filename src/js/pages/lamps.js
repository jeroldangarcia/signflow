import React from 'react';

// components
import { Page, Toolbar, ConfirmDialog} from 'tatami';
import { Icon, FAB, Header, GroupList0, Form, Select, SearchBox } from 'seito';

// css
import './lamps.scss';

// controller
import controller from '../controllers/lamps';

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

  handleCloseDialog = () => {
    this.props.toggleDialog(null);
  }

  handleItemSelected = () => {
    this.props.goto('BUDGET');
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
      <Page className="lamps">
        <Toolbar className="pageBar" icon="inbox" title="SOLICITUDES de MATERIALES">
          <Select id="groupBy" label="Agrupadas por: " options={groupCriterias} onChange={this.handleGroupCriteria}/>
          <Icon icon="search" action={this.toggleSearch}/>
        </Toolbar>
        {searchBox}
        <GroupList0 data={solicitudes} onPrimaryAction={this.handleItemSelected} collapsed={false}/>
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
    { id: '0', label: 'Solicitado', items: [
      { id: '01', icon: 'assignment', label: '[21800] Directa - Catálogo - Black Friday 2016', caption: '0000 / 00000', info: '10/11/2016' },
    ]},
    { id: '1', label: 'En Curso', items: [
      { id: '22', icon: 'assignment', label: 'Directa - Catálogo - Black Friday 2016', caption: '21800', info: '10/11/2016' },
      { id: '22', icon: 'assignment', label: 'Directa - Catálogo - Black Friday 2016 Cataluña', caption: '21800', info: '10/11/2016' },
      { id: '22', icon: 'assignment', label: 'Directa - Catálogo - Black Friday 2016 Canarias', caption: '21800', info: '10/11/2016' },
    ]},
    { id: '2', label: 'Publicado', items: [
      { id: '11', icon: 'assignment', label: '[21800] Directa - Catálogo - Black Friday 2016', caption: '0000 / 00000', info: '10/11/2016' },
      { id: '33', icon: 'assignment', label: '[21800] Directa - Catálogo - Black Friday 2016', caption: '0000 / 00000', info: '10/11/2016' },
      { id: '33', icon: 'assignment', label: '[21800] Directa - Catálogo - Black Friday 2016', caption: '0000 / 00000', info: '10/11/2016' },
    ]},
  ]


export default LAMPS;
