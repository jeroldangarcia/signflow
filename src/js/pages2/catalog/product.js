import React from 'react';
import { Page, Toolbar } from 'tatami';
import { Icon2, Button, Form, Field, Card, Switch, Select } from 'seito';
import './product.scss';

const Lane = (props) => {
  return (
    <div className="lane">
      <Card className="lane-card">
        {props.children}
      </Card>
    </div>
  )
}

class Product extends React.Component {

  handleBack = () => {
    this.props.goto('STORE');
  }

  renderToolbar = () => {
    return (
      <Toolbar icon="arrow_back" action={this.handleBack} title="Material" className="appBar"/>
    )
  }

  render() {
    return (
      <Page icon="arrow_back" className="product-page leaf" action={this.handleBack}
        fixedHeader={this.renderToolbar()}>

        <div style={{ position:'relative', backgroundColor: 'white'}}>
          <img src="/lonas.jpg"/>
          <h2 style={{ position: 'absolute', top: '1rem', right: '1rem'}}> Lona 10m </h2>
        </div>

        <Form title="Pre Impresion">
          <div style={{ display: 'flex'}}><span style={{ flex: 1}} className="field-label">Diseño</span><Switch /></div>
          <div style={{ display: 'flex'}}><span style={{ flex: 1}} className="field-label">Maquetación</span><Switch /></div>
          <div style={{ display: 'flex'}}><span style={{ flex: 1}} className="field-label">Dato Variable</span><Switch /></div>
          <div style={{ display: 'flex'}}><span style={{ flex: 1}} className="field-label">Prueba Color</span><Switch /></div>
          <div style={{ display: 'flex'}}><span style={{ flex: 1}} className="field-label">Prueba Digital</span><Switch /></div>
        </Form>

        <Form title="Impresion">
          <div style={{ display: 'flex'}}><span style={{ flex: 1}} className="field-label">Cubierta</span><Switch /></div>
          <div style={{ display: 'flex'}}><span style={{ flex: 1}} className="field-label">Guarda</span><Switch /></div>
          <div style={{ display: 'flex'}}><span style={{ flex: 1}} className="field-label">Sobrecubierta</span><Switch  /></div>
          <div style={{ display: 'flex'}}><span style={{ flex: 1}} className="field-label">Offset</span><Switch /></div>
          <div style={{ display: 'flex'}}><span style={{ flex: 1}} className="field-label">Digital</span><Switch /></div>
        </Form>

        <Form title="Encuadernación">
          <div style={{ display: 'flex'}}><span style={{ flex: 1}} className="field-label">Grapa</span><Select options={grapas} /></div>
          <div style={{ display: 'flex'}}><span style={{ flex: 1}} className="field-label">Rustica</span><Select options= {rusticas} /></div>
          <div style={{ display: 'flex'}}><span style={{ flex: 1}} className="field-label">Espiral</span><Switch /></div>
          <div style={{ display: 'flex'}}><span style={{ flex: 1}} className="field-label">Wire</span><Switch /></div>
        </Form>


        <footer style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', backgroundColor: 'white', height: '6rem', display: 'flex', borderTop: 'solid 1px #ccc', padding: '1rem', alignItems: 'center'}}>
          <div style={{ flex: 1}}/>
          <Button label="ADD" className="accent" />
        </footer>

      </Page>
    )
  }
}

export default Product;

const grapas = [
  { label: 'Sin Grapa', value: 0 },
  { label: 'Grapa a un lado', value: 0 },
  { label: 'Grapa Máquina', value: 0 },
]

const rusticas = [
  { label: 'Rustica', value: 0 },
  { label: 'Rustica Pura', value: 0 },
  { label: 'Rustica ', value: 0 },
]
