import React from 'react';
import { Icon2, Micon, Menu, Header, Badge2, Panel, List, Card, Lane, LaneItem, Tabs, Tab, Stack } from 'seito';
import controller from './controller';
import store from './store';

const CenterDistroCard = ({id, name, type, langs = [] }) => {

  const handleDelete = () => {
    controller.removeDistributionCenter(id);
  }

  return (
    <div>
      <Header icon="store" title={name}>
        <Icon2 icon="delete" clickable action={handleDelete}/>
      </Header>
      <div style={{ display: 'flex' }}>
        <Tabs className="vertical">
          <Tab><Icon2 icon="burst_mode"/></Tab>
          <Tab><Icon2 icon="attach_money"/></Tab>
          <Tab><Icon2 icon="timeline"/></Tab>
          <Tab><Icon2 icon="settings"/></Tab>
        </Tabs>
        <Stack>
          <Lane title="Materiales">
            {langs.map( lang => { return <Badge2 text={lang}/> })}
            {store.budget.materials.map( material => {
              const distribution = material.distribution[type] || '-';
              return (
                <LaneItem id={material.code} title={material.name} description={distribution}>
                  <img src={material.img} width="100%"/>
                </LaneItem>
              )
            })}
          </Lane>
        </Stack>
      </div>
    </div>
  )
}

class Distribution extends React.Component {
  menuDistr = [
    { icon: 'delete_sweep', label: 'Limpiar'},
    { icon: 'content_copy', label: 'Cargar Plantilla'},
    { icon: 'save', label: 'Salvar Como Plantilla'}
  ]

  menuBtn = <Micon icon="more_vert">
              <Menu title="Distribution" options={this.menuDistr} />
            </Micon>

  render() {
    return (
      <Panel title="Distribución a Centros" collapsed={false} collapsable={false} actions={this.menuBtn}>
        <List data={store.distribution[0].centers} renderer={CenterDistroCard} />
      </Panel>
    )
  }
}

export default Distribution;
