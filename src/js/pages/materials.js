import React from 'react';

// components
import { Page, Toolbar, ConfirmDialog, SearchBox } from 'tatami';
import { Header, Icon, Button, Field, List, SimpleListItem} from 'seito';

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

  newMaterialDialog = () => {
    const close = () => {
      this.props.toggleDialog(null);
    }
    this.props.toggleDialog(
      <ConfirmDialog title="Solicitud Nuevo Material..." onClose={close} onCancel={close}>
          <Field id="name"   label="Nombre" />
          <Field id="format" label="Formato" />
      </ConfirmDialog>
    )
  }

  render () {
    let materials = [];
    this.state.items.forEach( material => {
      material.formats.forEach( format => {
        materials.push({
          icon: 'burst_mode',
          title: material.mounting,
          subtitle: format,
          group: material.mounting,
          actions: (
                  <div style={{ flex: 1, display: 'flex', alignItems: 'center'}}>
                    <Icon icon="store" className="small"/>
                    <span>Todos</span>
                    &nbsp;&nbsp;&nbsp;
                    <span className="flag-icon flag-icon-es flag-icon-squared"></span>
                    &nbsp;
                    <span className="flag-icon flag-icon-gb flag-icon-squared"></span>
                    &nbsp;&nbsp;&nbsp;
                    <Icon icon="delete" className="small clickable"/>
                  </div>

          )
        })
      })
    })

    return (
      <Page>
        <Toolbar className="pageBar" icon="burst_mode" title="MATERIALES">
          <SearchBox />
        </Toolbar>
        <List data={materials} renderer={SimpleListItem} groupBy="group"/>
        <Header className="actionBar">
          <Button label="New Material" className="primary" action={this.newMaterialDialog}/>
        </Header>
      </Page>
    );
  }

};

export default Materials;
