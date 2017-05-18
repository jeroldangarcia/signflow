import React from 'react';
import { Card } from 'seito';
import './laneItem.scss';

const LaneItem = (props) => {

  const handleSelection = () => {
    props.onSelect(props.id)
  }

  return (
    <div onClick={handleSelection}>
      <Card className="lane-item">
        <header>{props.title}</header>
        <main>
          <div>Disponibilidad......<strong>OK</strong></div>
          <div>Precio medio........<strong>1.5 €</strong></div>
        </main>
        <footer>
          {props.description}
        </footer>
      </Card>
    </div>
  )
}

export default LaneItem;
