import React from 'react';
import { observer } from 'mobx-react';

import { Page } from 'tatami';
import { FAB, Icon2, Card, Header, Tabs, Tab, Stack, SearchBox } from 'seito';
import LaneItem from '../components2/laneItem';

import './catalog.scss';
import store from '../stores2/catalog';
import controller from '../controllers2/catalog';

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

  componentWillMount() {
    controller.load();
  }

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

class MaterialPage extends React.Component {

  componentWillMount() {
    controller.load();
  }

  state = {
    tab: 0
  }

  handleChangeTab = (tab) => {
    this.setState({ tab });
  }

  header = <Header className="appBar" icon="arrow_back" title="MATERIALES" />

  stickyHeader = (
    <Tabs className="appBar" selected={this.state.tab} onChange={this.handleChangeTab}>
      <Tab label="TODO" />
      <Tab label="CARTÓN" />
      <Tab label="PAPEL" />
      <Tab label="FOAM" />
      <Tab label="VINILO" />
      <Tab label="GLASSPACK" />
      <Tab label="PVC" />
      <Tab label="CARTULINA" />
      <Tab label="LONAS" />
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
          <MaterialList family="Cartón" goto={this.props.goto}/>
          <MaterialList family="Cartón" goto={this.props.goto}/>
          <MaterialList family="Cartón" goto={this.props.goto}/>
          <MaterialList family="Cartón" goto={this.props.goto}/>
          <MaterialList family="Cartón" goto={this.props.goto}/>
          <MaterialList family="Cartón" goto={this.props.goto}/>
          <MaterialList family="Gran Formato" goto={this.props.goto}/>
          <MaterialList family="Carteleria" goto={this.props.goto}/>
        </Stack>
        <FAB icon="add" />
        <footer style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', backgroundColor: 'white', height: '5rem', display: 'flex', borderTop: 'solid 1px #ccc', padding: '1rem', alignItems: 'center'}}>
          <Icon2 icon="search" /><SearchBox icon="search" className="flex100"/>
        </footer>
      </Page>
    )
  }
}

export { MaterialPage, MaterialList };
