import React from 'react';

// components
import { Page, Toolbar } from 'tatami';
import { Icon, FAB, Header, List, Select } from 'seito';

import { ConfirmDialog } from '../components/dialogs';
import Form from '../components/form';

// controller
import controller from '../controllers/lamps';
import promotions from '../controllers/promotions';

/**
 * Supply Page
 */
class Supply extends React.Component {

  state = {
    items: [],
  }

  componentWillMount() {
  }

  handleAddDialog = () => {
    controller.load((promotions) => {
      const options = promotions.map(promotion => {
        return { label: promotion.title , value: promotion.id }
      });
      this.props.toggleDialog(
        <ConfirmDialog title="Nueva Dotacion Centro..." onClose={this.handleCloseDialog} onCancel={this.handleCloseDialog}>
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

  goto = () => {
    this.props.goto('PROMOTIONS');
  }

  goto = () => {
    this.props.goto('ORDERS');
  }

  render () {
    const title = <Header icon="recent_actors" title="YA ES PRIMAVERA / Cartelería / Dotaciones a centros" className="page-title" />;
    return (
      <Page title={title}>
        <Toolbar className="pageBar" title="DOTACIONES A CENTROS" >

        </Toolbar>
      </Page>
    );
  }

};

export default Supply;
