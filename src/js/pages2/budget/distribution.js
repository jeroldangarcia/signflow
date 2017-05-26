import React from 'react';
import { Row, Column, Icon2, Micon, Menu, Header, Badge2, Panel, List, Card, Lane, LaneItem, Tabs, Tab, Stack, Field, Select } from 'seito';
import controller from './controller';
import store from './store';

const topics = [
  { label: '', value: '0'},
  { label:'Carteleria', value:'1' },
  { label:'Formato', value:'2' },
  { label:'Division', value:'3' },
  { label:'Idioma', value:'4' },
]

const actions = [
  { label: '', value: '0'},
  { label: 'Incluir', value: 'DO'},
  { label: 'Excluir', value: 'DONOT'},
  { label: 'Solo', value: 'ONLY'},

]

class CenterDistroCard  extends React.Component {

  state = {
    tab: 0
  }

  changeTab = (tab) => {
    this.setState({ tab });
  }

  handleDelete = () => {
    controller.removeDistributionCenter(id);
  }

  render() {
    return (
      <div>
        <Header icon="store" title={this.props.name}>
          <Icon2 icon="delete" clickable action={this.handleDelete}/>
        </Header>
        <div style={{ display: 'flex' }}>
          <Tabs className="vertical" selected={this.state.tab}  onChanged={this.changeTab}>
            <Tab><Icon2 icon="burst_mode"/></Tab>
            <Tab><Icon2 icon="settings"/></Tab>
          </Tabs>
          <Stack selected={this.state.tab}>
            <Lane title="Materiales">
              {store.budget.materials.map( material => {
                const distribution =
                  <Row>
                    <div>{material.distribution[this.props.type] || '-' }</div>
                    <div>{this.props.langs.map( lang => { return <Badge2 text={lang}/> })}</div>
                  </Row>
                return (
                  <LaneItem id={material.code} title={material.name} description={distribution}>
                    <img src={material.img} width="100%"/>
                  </LaneItem>
                )
              })}
            </Lane>
            <Lane title="Reglas" >
              <Column>
                <Row>
                  <Select id="topic" label="Tema" options={topics} value="0"/>
                  <Select id="action" label="Acción" options={actions} value="0"/>
                  <Field id="target" label="Objeto" value=" "/>
                  <Icon2 icon="add" clickable />
                  <div className="expanded"/>
                </Row>

                <Row>
                  <Field value="Cartelería" readOnly={true}/>
                  <Field value="Excluir" readOnly={true}/>
                  <Field value="...." readOnly={true}/>
                  <Icon2 icon="close"clickable />
                  <div className="expanded"/>
                </Row>

                <Row>
                  <Field value="Formato" readOnly={true}/>
                  <Field value="Excluir" readOnly={true}/>
                  <Field value="70 x 100" readOnly={true}/>
                  <Icon2 icon="close"clickable />
                  <div className="expanded"/>
                </Row>

                <Row>
                  <Field value="Idioma" readOnly={true}/>
                  <Field value="Solo" readOnly={true}/>
                  <Field value="Portugues" readOnly={true}/>
                  <Icon2 icon="close"clickable />
                  <div className="expanded"/>
                </Row>
              </Column>

            </Lane>
            <Lane title="TimeLine" ></Lane>
            <Lane title="Reglas" ></Lane>
          </Stack>
        </div>
      </div>
    )
  }
}

class Distribution extends React.Component {

  menuDistr = [
    { icon: 'store', label: "Añadir centro"},
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
