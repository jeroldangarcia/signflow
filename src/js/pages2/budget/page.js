import React from 'react';
import { Page, ConfirmDialog } from 'tatami';
import { Icon2, Micon, Menu, Header, Select, Panel, BreadCrumb, Badge2, Tabs, Tab, Stack, Comment, CommentBox, Field, Button, List } from 'seito';
import { MaterialList } from '../catalog';
import store from './store';
import './layout.scss';

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

const BudgetListItem = (item) => {
  console.log(item)
  return (
    <div className="budget-list-item listitem0">
      <div style={{ margin: '0 2rem 0 0'}}><img src={item.img}/></div>
      <span className="primaryAction">
        <span className="content">
          <span className="caption">{item.code}</span>
          <span className="title">{item.name}</span>
          <span className="subtitle">{item.detail}</span>
        </span>
        <span className="info0" style={{ display: 'flex', alignItems: 'center'}}>

            <div style={{ flex: 1, display: 'flex', alignItems: 'center', fontSize: '1.5rem', marginRight: '1rem'}}>
              <span className="flag-icon flag-icon-es flag-icon-squared"></span>
              &nbsp;
              <span className="flag-icon flag-icon-es-ct flag-icon-squared"></span>
              &nbsp;&nbsp;&nbsp;
              <span>5uds / 100€</span>
            </div>

            <Micon icon="more_vert">
              <Menu title="Material" options={[ {label: 'Borrar', icon:'delete'} ]} />
            </Micon>
        </span>

      </span>
    </div>
  )
}

const BudgetList = () => {
  return (
    <List data={store.budget.materials} renderer={BudgetListItem}/>
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
        <MaterialList />
      </ConfirmDialog>
    )
  }
  render() {
    const header = <BudgetHeader {...store.budget}/>
    const stickyHeader= <Tabs onChanged={this.handleTab} selected={this.state.tab}><Tab label="Info"/><Tab label="Materiales"/><Tab label="Seguimiento"/></Tabs>
    return (
      <Page className="budget-page"
        threshold="0"
        fixedHeader={header}
        stickyHeader={stickyHeader}>

        <Stack selected={this.state.tab}>

          <div>
            <Panel title="Subcampaña" collapsable={true} collapsed={false}>
              <div style={{ display: 'flex' }}>
                <img src="/img/camp_blackfriday.jpg" width="200px" height="200px"/>
                <div style={{ flex: 1 }}>
                  <Field label="ID" value="#000001" readOnly={true}/>
                  <Field label="Name" value="Black Friday" readOnly={true}/>
                  <Field label="Owner" value="David Echevarria" readOnly={true}/>
                </div>
              </div>
            </Panel>

            <Panel title="Briefing" collapsable={true} collapsed={false}>

                <div style={{ margin: '1rem 4.6rem' }}>
                  <span style={{ fontSize: '1.4rem', fontWeight: '300' }}>Centros</span>
                </div>
                <div style={{ border: 'solid 1px #eee',margin: '0 4.6rem', minHeight: '3rem', display: 'flex' }}>
                  {['Castellana', 'H.Meridiana', 'León'].map(item => {
                    return (
                      <span className="badge" style={{ backgroundColor: '#456', maxWidth: '10rem',padding: '1rem', margin:'0 1rem 0 0'}}>
                        {item}
                      </span>
                    )
                  })}
                </div>
                <div style={{ margin: '1rem 4.6rem' }}>
                  <span style={{ fontSize: '1.4rem', fontWeight: '300' }}>Divisiones</span>
                </div>
                <div style={{ border: 'solid 1px #eee',margin: '0 4.6rem', minHeight: '3rem', display: 'flex' }}>
                  {['Infantil', 'Mujer', 'Perfumería'].map(item => {
                    return (
                      <span className="badge" style={{ backgroundColor: '#456', maxWidth: '10rem', padding: '1rem', margin:'0 1rem 0 0'}}>
                        {item}
                      </span>
                    )
                  })}
                </div>
            </Panel>
          </div>

          <Panel
            title="Materiales"
            collapsable={false} collapsed={false}
            actions={<Icon2 icon="add" clickable action={this.handleAddMaterialDialog} />}
          >
            <Panel className="infopanel noicon" actions={<span>| Idiomas | unidades | $ |</span>} collapsed={false} collapsable={false} />
            <BudgetList />
            <Panel className="infopanel noicon" actions={<span style={{ fontSize: '1.4rem', fontWeight: '600'}}> Estimación: 25uds | 500€ </span>} collapsed={false} collapsable={false} />

          </Panel>

          <div>
            <Panel
              title="Mensajes"
              collapsable={true} collapsed={false}
              actions={[<Icon2 icon="messages" badge="3"/>]}>
                <div>
                  <Comment avatar="https://randomuser.me/api/portraits/thumb/men/13.jpg" author="MKT - David Echevarria" time="hace 1 hora.">
                    Creo que debemos incluir materiales de alta calidad porque en este caso seran reutilizadas el proximo año...
                  </Comment>
                  <Comment avatar="https://randomuser.me/api/portraits/thumb/men/14.jpg" author="PPV - Alvaro" time="hace 1 hora.">
                    Perfecto, incluimos lonas de 10m de alta calidad... aunque se incrementa el coste en 100€ la unidad....
                  </Comment>
                  <Comment avatar="https://randomuser.me/api/portraits/thumb/men/13.jpg" author="MKT - David Echevarria" time="hace 1 hora.">
                    Ok!
                  </Comment>
                  <CommentBox avatar="https://randomuser.me/api/portraits/thumb/men/20.jpg"/>
                  <br/>
                  <br/>
                </div>
            </Panel>
            <Panel title="Actividad" collapsed={false}>
              .... eventos ....
            </Panel>
          </div>
        </Stack>
      </Page>
    )
  }
}


export default BudgetPage;
