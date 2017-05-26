import React from 'react';
import { Page, ConfirmDialog } from 'tatami';
import { Icon2, Micon, Menu, Header, Select, Panel, BreadCrumb, Badge2, Tabs, Tab, Stack, Comment, CommentBox, Field, Button, List } from 'seito';
import { Budget, BudgetInfo } from './budget';
import { CatalogList } from '../catalog/page';
import Distribution from './distribution';
import Activity from './activity';
import controller from './controller';
import store from './store';
import './page.scss';

const BudgetHeader = ({info}) => {
  const title = <strong>Presupuesto: [{info.campaign.code}] {info.campaign.name} - {info.subcampaign.name} :</strong>;
  return (
    <div className="budget-header">
      <BreadCrumb>{info.company.name} | {info.group.name} | {info.bearer.name} |</BreadCrumb>
      <Header className="campaigns-header" icon="assignment" title={title}>
        <h4> <input type="checkbox"/> BRIEFING | <input type="checkbox"/> MATERIALES  | <input type="checkbox"/> DISTRIBUCION </h4>
      </Header>
    </div>
  )
}

class BudgetPage extends React.Component {

  state = {
    tab: 0
  }

  handleTab = (tab) => {
    this.setState({ tab })
  }

  handleAddMaterialDialog = () => {
    const onClose = () => {
      this.props.toggleDialog(null);
    }
    this.props.toggleDialog(
      <ConfirmDialog title="Selección de material" onClose={onClose} onCancel={onClose}>
        <CatalogList />
      </ConfirmDialog>
    )
  }

  render() {
    const header = <BudgetHeader {...store.budget}/>
    const materialsCount = store.budget.materials.length || 0;
    const stickyHeader=
      <Tabs onChanged={this.handleTab} selected={this.state.tab}>
        <Tab label="Info" />
        <Tab label="Materiales" info={materialsCount} />
        <Tab label="Distribución" />
        <Tab label="Seguimiento" />
      </Tabs>
    return (
      <Page className="budget-page"
        threshold="0"
        fixedHeader={header}
        stickyHeader={stickyHeader}>
        <Stack selected={this.state.tab}>
          <BudgetInfo />
          <Budget toggleDialog={this.props.toggleDialog} />
          <Distribution />
          <Activity />
        </Stack>
      </Page>
    )
  }
}

export default BudgetPage;
