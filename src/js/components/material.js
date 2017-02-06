import React from 'react';
import { Dialog, ConfirmDialog } from 'tatami';
import { Field, HCard, Tabs, Tab, Stack, Button, InfoLine, Select, List, Panel } from  'seito';
import './material.scss';
import clipboard from 'clipboard-js';

const MaterialListItem = (props) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center',  paddingRight: '1.6rem'  }}>
      <Field icon="burst_mode" value="Material 1"  readOnly={true} className="flex60"/>
      <Field label="Proveedor" value="Proveedor 1" readOnly={true} className="flex60" icon="local_shipping" />
      <Field label="Carga"     value="40%"         readOnly={true} className="flex20"/>
      <Field label="Ranking"   value="1"           readOnly={true} className="flex20"/>
      <Field label="€/unit"    value="1.4 €"       readOnly={true} className="flex20"/>
      &nbsp;
      <h4>100 uds.</h4>&nbsp;&nbsp;&nbsp;<h2>140</h2>&nbsp;<h4>€</h4>
    </div>
  )
}

const MaterialInboxItem = (props) => {
  const onSelection = () => {
    clipboard.copy(props.id).then(() => {
      console.log(`material id ${props.id} copied to clipboard`);
    });
    props.onSelection(props);
  }
  return (
    <div className="material inboxItem" onMouseUp={onSelection}>
      <InfoLine info="[21800]" decorator="000 / 0000" classname="caption"></InfoLine>
      <InfoLine icon="burst_mode" className="title" decorator="100€">{props.mounting}</InfoLine>
      <InfoLine info="">{props.formats[0]}</InfoLine>
    </div>
  )
}

class MaterialCard extends React.Component  {

  state = {
    tab: 0,
  }

  handleChangeTab = (tab) => {
    this.setState({ tab });
  }

  handleProviderDialog = () => {

    const title = (
      <div style={{ display: 'flex' }}>
        <span>Proveedor </span>
        <Select options={providerType} className="title-like"/>
      </div>
    )

    this.props.toggleDialog(
      <Dialog title={title} onClose={this.handleCloseDialog} onCancel={this.handleCloseDialog}>
        <div style={{ display: 'flex', flex: '1', overflow: 'auto', minHeight: '100px', maxHeight: '300px'}}>
          <List data={providers} onSelection={this.handleCloseDialog} />
        </div>
      </Dialog>
    )
  }

  handleCloseDialog = () => {
    this.props.toggleDialog(null);
  }

  render() {
    return (
      <HCard icon="burst_mode" title={this.props.mounting} caption="[2800]" className="materialcard">

        <div style={{ display: 'flex', alignItems: 'center',  paddingRight: '1.6rem'  }}>
          <Field icon="burst_mode" value={`${this.props.mounting} ${this.props.formats[0]}`} readOnly={true} className="flex300"/>
          <Field label="Tirada" value="100 uds" readOnly={true} className="flex80"/>
          <Field label="Total" value="100 €" readOnly={true} className="flex60 bold"/>
        </div>

        <Panel title="Proveedor" collapsed={false}>
          <div style={{ display: 'flex',  alignItems: 'center', borderTop: 'solid 1px lightgray', paddingTop: '3rem', paddingRight: '1.6rem' }}>
          <Field label="Proveedor" value="Proveedor 1" readOnly={true} className="flex-unit" icon="local_shipping" />
          <Field label="Carga"     value="40%"         readOnly={true} className="flex20"/>
          <Field label="Ranking"   value="1"           readOnly={true} className="flex20"/>
          <Field label="€/Unidad"  value="1.4 €"       readOnly={true} className="flex20"/>
          </div>
        </Panel>

        <Panel title="Distribucion Centros" collapsed={false}>
          <InfoLine info="01" decorator="55 uds. / 60€">Castellana</InfoLine>
          <InfoLine info="02" decorator="10 uds. / 12€">Preciados</InfoLine>
          <InfoLine info="03" decorator="10 uds. / 12€">Goya</InfoLine>
          <InfoLine info="04" decorator="15 uds. / 20€">Pozuelo</InfoLine>
        </Panel>

        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem 1.6rem', borderTop: 'solid 1px lightgray', }}>
          <Button label="Cambiar Proveedor" className="secondary" action={this.handleProviderDialog}/>
          <Button label="Aprobar" className="accent"/>
        </div>

      </HCard>
    )
  }
}

const Material = (props) => {
  return (
    <div className="material"> material</div>
  )
}

const providerType = [
    { label: 'más barato', value: '1' },
    { label: 'más rapido', value: '2' },
    { label: 'menor carga', value: '3' },
]

const providers = [
    { icon: 'store', title:'Proveedor 1', subtitle:'load: 100%', info: '100$'},
    { icon: 'store', title:'Proveedor 2', subtitle:'load: 200%', info: '200$'},
    { icon: 'store', title:'Proveedor 3', subtitle:'load: 50%', info: '300$'},
    { icon: 'store', title:'Proveedor 4', subtitle:'load: 20%', info: '320$'},
    { icon: 'store', title:'Proveedor 6', subtitle:'load: 40%', info: '350$'},
    { icon: 'store', title:'Proveedor 7', subtitle:'load: 120%', info: '400$'},
    { icon: 'store', title:'Proveedor 8', subtitle:'load: 0%', info: '410$'},
]

export { MaterialListItem, MaterialInboxItem, MaterialCard, Material }


/*
        <Tabs selected={this.state.tab} onChange={this.handleChangeTab}>
          <Tab label="Proveedor"/>
          <Tab label="Distribución Centros" />
        </Tabs>


        <Stack selected={this.state.tab}>
          <div style={{ display: 'flex',  alignItems: 'center', borderTop: 'solid 1px lightgray', paddingTop: '3rem', paddingRight: '1.6rem' }}>
            <Field label="Proveedor" value="Proveedor 1" readOnly={true} className="flex-unit" icon="local_shipping" />
            <Field label="Carga"     value="40%"         readOnly={true} className="flex20"/>
            <Field label="Ranking"   value="1"           readOnly={true} className="flex20"/>
            <Field label="€/Unidad"  value="1.4 €"       readOnly={true} className="flex20"/>
          </div>
          <div style={{ borderTop: 'solid 1px lightgray', paddingTop: '3rem', paddingRight: '1.6rem' }}>
            <InfoLine info="01" decorator="55 / 60€">Castellana</InfoLine>
            <InfoLine info="02" decorator="10 / 12€">Preciados</InfoLine>
            <InfoLine info="03" decorator="10 / 12€">Goya</InfoLine>
            <InfoLine info="04" decorator="15 / 20€">Pozuelo</InfoLine>
          </div>
        </Stack>
*/
