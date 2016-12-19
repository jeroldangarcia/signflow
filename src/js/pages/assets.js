import React from 'react';

// components
import { Page, Toolbar } from 'tatami';
import { Header, List } from 'seito';

import Icon from '../components/icon';
import { FAB } from '../components/button';
import { ConfirmDialog } from '../components/dialogs';
import Form from '../components/form';
import { Select } from '../components/field';

// controller
import controller from '../controllers/lamps';
import promotions from '../controllers/promotions';

/**
 * Assets Page
 */
class Assets extends React.Component {

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
        <ConfirmDialog title="Arte Final..." onClose={this.handleCloseDialog} onCancel={this.handleCloseDialog}>
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
    const title = <Header icon="burst_mode" title="YA ES PRIMAVERA / Cartelería / Arte Final" className="page-title" />;
    return (
      <Page title={title}>

      </Page>
    );
  }

};

export default Assets;
