import React from 'react';
import { ConfirmDialog } from 'tatami';
import { Icon, Form, Select, Field, Panel } from 'seito';

const CampaignTarget = (props) => {

  const targetTypes = [
    { label: '', value: '0'},
    { label: 'Venta Tráfico', value: '1'},
    { label: 'Venta Tráfico Generico', value: '2'},
    { label: 'Visibilidad', value: '3'}
  ]

  const handleCloseDialog = () => {
    props.toggleDialog(null);
  }

  const handleAddTargetDialog = () => {
    props.toggleDialog(
      <ConfirmDialog title="Objetivos" onClose={handleCloseDialog} onCancel={handleCloseDialog}>
        <Form title="Primario">
          <Select label="Tipo" options={targetTypes} value="" />
          <Field label="Objetivo" value="" />
        </Form>
        <Form title="Secundario">
          <Select label="Tipo" options={targetTypes} value=""/>
          <Field label="Objetivo" value=""/>
        </Form>
      </ConfirmDialog>
    )
  }

  const targetActions = [
    <Icon icon="add" action={handleAddTargetDialog} className="clickable"/>,
  ]

  return (
    <Panel title="Objetivos" collapsable={true} collapsed={true} actions={targetActions}>
      <Panel className="infopanel" icon="flag" title="1: Visibilidad --> Visibilidad (Genérico)" collapsable={false} open={false} />
      <Panel className="infopanel" icon="flag" title="2: Venta Trafico --> Venta Tráfico (Genérico)" collapsable={false} open={false} />
    </Panel>
  )
}

export default CampaignTarget;
