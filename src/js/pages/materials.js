import React from 'react';

// components
import { Page, Toolbar } from 'tatami';
import { List } from 'seito';

import Icon from '../components/icon';

// controller
import controller from '../controllers/materials';

/**
 * Materials Page
 */
class Materials extends React.Component {

  state = {
    items: [],
  }

  componentWillMount() {
    controller.load((items) => {
      this.setState({ items });
    });
  }

  exit = () => {
    this.props.goto('SPLASH');
  }

  gotoMaterials = () => {
    this.props.goto('CAMPAIGNS');
  }

  goto = () => {
    this.props.goto('ORDERS');
  }


  render () {

    let materials = [];

    this.state.items.forEach( material => {
      material.formats.forEach( format => {
        materials.push({
          icon: 'recent_actors',
          title: material.mounting,
          subtitle: format,
          group: material.mounting
        })
      })
    })

    return (
      <Page>
        <Toolbar className="pageBar" icon="recent_actors" title="MATERIALES" />
        <List title="Materiales" data={materials} itemStyle="tablerow" selected={true} groupBy="group"/>
      </Page>
    );
  }

};

export default Materials;
