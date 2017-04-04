import React from 'react';
import { Icon, Select, Panel } from 'seito';

const CampaignTracking = () => {

  const portadores = [
    { label: '0306 - BLACK FRIDAY', value: '0001' },
  ]

  return (
    <Panel title="Seguimiento" collapsable={true} collapsed={true}>
      <div style={{ display: 'flex', padding: '1rem 3rem', alignItems: 'center', backgroundColor: '#f4f5f6', borderBottom: 'solid 1px #DDD' }}>
        <input id="mktroi" type="checkbox" />
        <label for="mktroi">Seguimiento MKT ROI</label>
        &nbsp;
        <Select label="Portador" options={portadores} value=""/>
      </div>
    </Panel>
  )
}

export default CampaignTracking;
