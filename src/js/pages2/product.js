import React from 'react';
import { Page, Toolbar } from 'tatami';
import { Icon2, Form, Field, Card } from 'seito';
import LaneItem from '../components2/laneItem';


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
    this.props.goto('CATALOG');
  }

  renderToolbar = () => {
    return (
      <Toolbar icon="arrow_back" action={this.handleBack} title="Material" className="appBar"/>
    )
  }

  renderGallery() {
    const items = [
      { src: '/img/lonas.jpg' }
    ]
    return (
      <Lane>
        <LaneItem title="Ocho Dias Oro 2015" src="/img/lona_calle1.jpg" description="Castellana" />
        <LaneItem title="Semana Fantastica 2016" src="/img/lona_calle2.jpg" description="Preciados" />
        <LaneItem title="Black Friday 2015" src="/img/lona_calle3.jpg" description="León" />
      </Lane>
    )
  }

  render() {
    return (
      <Page icon="arrow_back" className="leaf" action={this.handleBack}
        fixedHeader={this.renderToolbar()}>

        <div style={{ position:'relative', backgroundColor: 'white'}}>
          <img src="/img/lonas.jpg"/>
          <h2 style={{ position: 'absolute', top: '1rem', right: '1rem'}}> Lona 10m </h2>
        </div>

        <Form title="Propiedades">
          <Field label="Dimensiones" value="10m x 10m" readOnly={true}/>
          <Field label="Anclajes" value="Gancho 100mm" readOnly={true}/>
        </Form>

        <Form title="Proveedores">
          <Field label="Ganador" value="Imprentas Alcantara" readOnly={true}/>
          <Field label="Más Barato" value="Copysell S.L." readOnly={true}/>
          <Field label="Más Rápido" value="Copysell S.L." readOnly={true}/>
        </Form>

        <Form title="Implantaciones pasadas... (via PPV)">
          {this.renderGallery()}
        </Form>

        <br/><br/><br/>

        <footer style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', backgroundColor: 'white', height: '6rem', display: 'flex', borderTop: 'solid 1px #ccc', padding: '1rem', alignItems: 'center'}}>
          <Icon2 icon="edit" clickable />
          <div style={{ flex: 1}}/>
          <Icon2 icon="add" clickable />
        </footer>

      </Page>
    )
  }
}

export default Product;
