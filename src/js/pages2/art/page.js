import React from 'react';
import { observer } from 'mobx-react';

import { Page } from 'tatami';
import { FAB, Icon2, Card, Header, Tabs, Tab, Stack, SearchBox } from 'seito';
import LaneItem from '../components2/laneItem';

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

const MaterialLane = (props) => {

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
            <LaneItem title="Material" src={item.img} description={description} onSelect={props.onSelect}/>
          )
        })}
      </Lane>
    </div>
  )
}

ArtPage extends React.Component {
  render() {
    return(
      <Page className="art-page">
        <MaterialLane />
        <MaterialLane />
        <MaterialLane />
      </Page>
    )
  }
}
