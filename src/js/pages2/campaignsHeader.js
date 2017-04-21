import React from 'react';
import { Page, Toolbar } from 'tatami';
import { Icon, Select } from 'seito';
import store from '../stores2/campaigns';
import './campaignsHeader.scss';

const CampaignsHeader = (props) => {
  const menu = [
    { icon: 'format_list_bulleted', label: 'Briefing' },
    { icon: 'description', label: 'Informe Excel'},
  ]
  const title = (
    <div className="campaigns-title">
      <span>CAMPAÑAS</span>
      <Select options={store._cias}/>
    </div>
  )
  return (
    <Toolbar className="campaigns-header" icon="card_giftcard" title={title} menu={menu}>
      <Select options={store._periods}/>
      <Select options={store._seasons}/>
      <Select options={store._states}/>
    </Toolbar>
  )
}

export default CampaignsHeader;
