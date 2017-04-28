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
          <img src={props.src}/>
        </main>
        <footer>
          {props.description}
        </footer>
      </Card>
    </div>
  )
}

export default LaneItem;
