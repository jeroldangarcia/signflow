import React from 'react';
import { observer } from 'mobx-react';
import { ConfirmDialog } from 'tatami';
import { Icon2, Micon, Menu, List, Panel, Field } from 'seito';
import { CatalogList } from '../catalog/page';
import { UploadWizard } from './upload.js'
import store from './store.js';
import './budget.scss';

const BudgetInfo = (props) => {
  return (
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
  )
}

const BudgetGroup = (props) => { console.log(props)
  return (
    <div className="budget-group">
      <span className="title">{props.title}</span>
      <Icon2 icon="more_vert" clickable/>
    </div>
  )
}

const BudgetItem = (item) => {
  return (
    <div className="budget-item">

      <div className="thumbnail"><img src={item.img}/></div>

      <span className="container">

        <span className="material">
          <div>{item.code}</div>
          <div><strong>{item.detail}</strong></div>
        </span>

        <span className="distribution">
          <input type="text" value="30" />
          <input type="text" value="25" />
          <input type="text" value="0" />
          <span className="sum">2150 uds.</span>
          <Micon icon="more_vert" clickable>
            <Menu title="Distribución" options={[ {label: 'Detalle Centro ', icon:'store'} ]} />
          </Micon>
        </span>

        <span className="cost" style={{ display: 'flex', alignItems: 'center'}}>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', fontSize: '1.5rem', marginRight: '1rem'}}>
              <input value="Nivel 1"/>
              <span className="sum">10€</span>
              <span className="sum"><strong>100€</strong></span>
            </div>
        </span>

      </span>

      <Micon icon="more_vert" clickable>
        <Menu title="Motivo" options={[
          { label: 'Eliminar', icon: 'delete' },
          { label: 'Enviar'  , icon: 'send'   },
          { label: 'Detener' , icon: 'stop'   },
          { label: 'Repetir' , icon: 'repeat' },
        ]}/>
      </Micon>

    </div>
  )
}

@observer
class Budget extends React.Component {

  handleAddMaterialDialog = () => {
    const onClose = () => {
      this.props.toggleDialog(null);
    }
    this.props.toggleDialog(
      <ConfirmDialog className="upload-dialog" title="Añadir PDF" onClose={onClose} onCancel={onClose}>
        <UploadWizard />
      </ConfirmDialog>
    )
  }

  render() {
    const addButton = <Icon2 icon="add" clickable action={this.handleAddMaterialDialog} />;
    return (
      <Panel title="Materiales" collapsable={false} collapsed={false} actions={addButton}>
        <List data={store.budget.materials} renderer={BudgetItem} groupBy="name" groupRenderer={BudgetGroup}/>
        <Panel className="infopanel noicon" actions={<span style={{ fontSize: '1.4rem', fontWeight: '600'}}> Estimación: 25uds | 500€ </span>} collapsed={false} collapsable={false} />
      </Panel>
    )
  }
}

export { Budget, BudgetInfo };
