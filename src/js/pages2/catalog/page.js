import React from 'react';
import { observer } from 'mobx-react';

import { Page, Toolbar } from 'tatami';
import { FAB, Icon2, Badge2, Card, Header, Tabs, Tab, Stack, SearchBox } from 'seito';
import LaneItem from './laneItem';

import './page.scss';
import store from './store';
import controller from './controller';

const Lane = (props) => {
  return (
    <div className="lane">
      <Card className="lane-card">
        {props.children}
      </Card>
    </div>
  )
}

const CatalogLane = (props) => {

  const description = (
    <div style={{ display: 'flex',  padding: '0 0 0 1rem'}}>

      <div style={{ flex: 1 }}/>
      <Icon2 icon="more_vert" className="tiny dark-grey flex1" clickable/>
    </div>
  )

  return (
    <div style={{ flex:1, display: 'flex', flexDirection: 'column', position: 'relative', margin: '1rem'}}>
      <Header icon="burst_mode" title={props.title} >
        <Icon2 icon="add" clickable />
      </Header>
      <Lane>
        {props.items.map( item => {
          return (
            <LaneItem title={item.name} src={item.img} description={description} onSelect={props.onSelect}/>
          )
        })}
      </Lane>
    </div>
  )
}

@observer
class MaterialList extends React.Component {

  handleSelection = (id) => {
    this.props.goto("PRODUCT");
  }

  render() {
    const materials = this.props.family ? store.materials.filter(material => material.family === this.props.family) : store.materials;
    return (
      <div>
        {materials.map( material => <CatalogLane title={material.mounting} items={material.formats} onSelect={this.handleSelection}></CatalogLane>)}
      </div>
    )
  }
}

class Catalog extends React.Component {

  componentWillMount() {
    controller.load();
  }

  state = {
    tab: 0
  }

  handleChangeTab = (tab) => {
    this.setState({ tab });
  }

  handleAccount = () => {
    this.props.goto("CUSTOMER");
  }

  header = (
    <Toolbar className="appBar" icon="store" title="Tienda">
      <Icon2 icon="shopping_cart" clickable/><span>( 2 )</span>
    </Toolbar>
  );

  stickyHeader = (
    <Tabs className="appBar" selected={this.state.tab} onChange={this.handleChangeTab}>
      <Tab label="TODOS" />
      <Tab label="LONA" />
      <Tab label="HOSTELERIA" />
      <Tab label="VINILOS" />
      <Tab label="Otros..." />
    </Tabs>
  )

  render() {
    return (
      <Page
        threshold= {0}
        className="catalog-page leaf"
        fixedHeader={this.header}
        stickyHeader={this.stickyHeader}>
        <Stack selected={this.state.tab}>
          <MaterialList goto={this.props.goto}/>
          <MaterialList family="Lonas" goto={this.props.goto}/>
          <MaterialList family="Hosteleria" goto={this.props.goto}/>
          <MaterialList family="Vinilo" goto={this.props.goto}/>
        </Stack>
        <FAB icon="person" action={this.handleAccount}/>
        <footer style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', backgroundColor: 'white', height: '5rem', display: 'flex', borderTop: 'solid 1px #ccc', padding: '1rem', alignItems: 'center'}}>
          <Icon2 icon="search" /><SearchBox icon="search" className="flex100"/>
        </footer>
      </Page>
    )
  }
}

export default Catalog;
