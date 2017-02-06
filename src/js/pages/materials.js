import React from 'react';

// components
import { Page, Toolbar } from 'tatami';
import { Icon, Header, Button, List, SimpleListItem} from 'seito';

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
          icon: 'burst_mode',
          title: material.mounting,
          subtitle: format,
          group: material.mounting
        })
      })
    })

    console.log(materials)

    return (
      <Page>
        <Toolbar className="pageBar" icon="burst_mode" title="MATERIALES" />
        <List title="Materiales" data={materials} renderer= {SimpleListItem} groupBy="group"/>
        <Header className="actionBar">
          <Button label="New Material" className="primary" />
        </Header>
      </Page>
    );
  }

};

export default Materials;
