import React from 'react';
import { observer } from 'mobx-react';
import { DateIcon, Icon2, Badge2, Header, GroupList, Field } from 'seito';
import store from '../stores2/campaigns';
import './campaignsList.scss';

const CampaignGroupItem = (props) => {
  const onToggled = () => {
    props.onToggled();
  }
  const toggleIcon = props.collapsed === true ? 'expand_more' : 'expand_less';
  return (
    <div className="campaign-group-header">
      <Header title={props.title}>
        <Badge2 text={`${props.items} campañas.`}/>
        <Icon2 icon="edit" clickable />
        <Icon2 icon="add" clickable />
        <Icon2 icon={toggleIcon} clickable action={onToggled}/>
      </Header>
    </div>
  )
}

const CampaignItem = (props) => {
  return (
    <div className="campaign-item">
      <DateIcon
        day={props.date1.day} month={props.date1.month} year="2017"
        day2={props.date2.day} month2={props.date2.month} year2="2017"
      />
      <div className="campaign-card-title">
        <div>{props.caption}</div>
        <div>{props.title}</div>
      </div>
    </div>
  )
}

const CampaignsListToolbar = () => {
  return(
    <Header icon="filter_list" className="campaigns-list-toolbar">
      <Field id="filter1" label="Grupo" />
      <Field id="filter2" label="Campaña" />
      <Icon2 icon="sort" clickable />
      <Icon2 icon="sort_by_alpha" clickable />
    </Header>
  )
}

@observer
class CampaignsList extends React.Component {
  render() {
    return (
      <div className="campaigns-list">
        <GroupList data={store.campaigns} renderer={CampaignItem} groupBy="groupBy" groupRenderer={CampaignGroupItem} />
      </div>
    )
  }
}

export { CampaignsList, CampaignsListToolbar };
