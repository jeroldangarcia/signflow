import React from 'react';

// components
import Page from '../components/page';
import Header from '../components/header';
import Drawer from '../components/drawer';
import Icon from '../components/icon';
import List from '../components/list';

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
          cells: [ format ],
          group: material.mounting
        })
      })
    })

    return (
      <Page title="MATERIALES">
        <List title="Materiales" data={materials} itemStyle="tablerow" selected={true} groupBy="group"/>
      </Page>
    );
  }

};

export default Materials;