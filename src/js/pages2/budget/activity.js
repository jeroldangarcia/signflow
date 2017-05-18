import React from 'react';
import { Icon2, Panel, CommentBox, Comment } from 'seito';

class Activity extends React.Component {
  render() {
    return (
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
    )
  }
}

export default Activity;
