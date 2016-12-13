import React from 'react';

// components
import Icon from './icon';
import { Link } from '../components/button';

// style
import './list.scss';

/**
 * listitem
 **/
const ListItem = ({id, icon, decorator, thumbnail, title, caption, subtitle, cells = [], actions, selected, onSelected, className}) => {

  const selectItem = () => {
    onSelected(id);
  }

  const renderIcon = icon ? <Icon icon={icon} decorator={decorator} action={selectItem}/> : null;
  const renderThumb = thumbnail ? <img className="thumbnail" src={thumbnail}/> : null;
  const renderCaption = caption ? <span style={{ lineHeight: '1.1rem', color: '#999', fontWeight: '200', fontSize: '1rem' }}>{caption}</span> : null;

  const selectedClassName = selected ? 'selected' : '';
  const renderActions = actions ? actions.map((action, index) => action.label ? <Link id={index} label={action.label} onMouseUp={action.do} /> : <Icon id={index} icon={action.icon} action={action.do}/>) : null;

  return (
    <div className={`listitem ${className} ${selectedClassName}`}>
      {renderIcon}
      {renderThumb}
      <section onMouseUp={selectItem}>
        <div className="title" style={{display:'flex', flexDirection: 'column'}}>
          {renderCaption}
          <span style={{ lineHeight: '2rem'}}>{title}</span>
        </div>
        {cells.map(cell => <div className="title">{cell}</div>)}
        <div className="subtitle">{subtitle}</div>
      </section>
      <section className="actions">
        {renderActions}
      </section>
    </div>
  );
};


const ListItem2 = ({id, icon, decorator, title, cells = [], selected }) => {
  const selectItem = () => { onSelected(id); }
  const selectedClassName = selected ? 'selected' : '';
  return (
    <div className={`listitem listrow ${selectedClassName}`}>
      <Icon icon={icon} decorator={decorator} action={selectItem}/>
      <div className="title" style={{display:'flex', flexDirection: 'column'}}>
        <span style={{ lineHeight: '2rem'}}>{title}</span>
        <div className="title">{cells.map(cell => cell )}</div>
      </div>
    </div>
  )
}

/**
 * List
 *
 **/
const List = (props) => {

  const sort = (data, groupBy) => {
    return data.sort((a,b) => {
      return a[groupBy].localeCompare(b[groupBy]);
    });
  }

  const group = (data, groupBy) => {
    let grouped = {};
    data.forEach(item => {
      const key = item[groupBy];
      if (!grouped[key]) grouped[key] = new Array();
      grouped[key].push(item);
    })
    return grouped;
  }

  const renderGroups = (groups) => {
    return Object.keys(groups).map( key => {
      const values = groups[key];
      const items = values.map(renderItem);
      return (
        <div key={key} className="list-group">
          <header className="sticky-header">{key}</header>
          {items}
        </div>)
    })
  }

  const renderListItem = (item) => {
    const selected = props.selected === item.id;
    return <ListItem2
      key={item.id}
      id={item.id}
      icon={item.icon}
      thumbnail={item.thumbnail}
      title={item.title}
      cells = {item.cells}
      subtitle={item.subtitle}
      selected={selected}
      onSelected={props.onSelected}
      className={props.itemStyle}
      actions={item.actions}
      caption={item.caption}
      decorator={item.decorator}
    />
  }

  const renderRowItem = (item) => {
    const selected = props.selected === item.id;
    return <ListItem
      key={item.id}
      id={item.id}
      icon={item.icon}
      thumbnail={item.thumbnail}
      title={item.title}
      cells = {item.cells}
      subtitle={item.subtitle}
      selected={selected}
      onSelected={props.onSelected}
      className={props.itemStyle}
      actions={item.actions}
      caption={item.caption}
      decorator={item.decorator}
    />
  }

  const renderers = {
    'listItem' : renderListItem,
    'tableRowItem': renderRowItem,
  }

  const renderItem = renderers[props.itemStyle] || renderRowItem;
  console.log(props)
  let items = null;

  if (props.groupBy) {
    const sorted = props.sortBy && props.groupBy ? sort(props.data, props.groupBy) : props.data;
    const grouped = group(props.data, props.groupBy);
    items = renderGroups(grouped);
  } else {
    items = props.data.map(renderItem);
  }

  const title = props.title ? <div className="title">{props.title}</div> : '';

  return (
    <div className={`list ${props.className}`}>
      {title}
      {items}
    </div>
  );
};

export default List;
