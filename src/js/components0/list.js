import React from 'react';
import Icon from './icon';
import './list.scss';

const ListItem = ({id, icon, thumbnail, title, subtitle, onSelected}) => {

  const selectItem = () => {
    onSelected(id)
  }

  const renderIcon = icon ? <Icon icon={icon} /> : null;
  const renderThumb = thumbnail ? <img className="thumbnail" src={thumbnail}/> : null;

  return (
    <div className="listitem" onMouseUp={selectItem}>
      {renderIcon}
      {renderThumb}
      <section>
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
      </section>
    </div>
  );
};

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

  const renderItem = (item) => {
    return (
      <ListItem key={item.id} icon={item.icon} thumbnail={item.thumbnail} title={item.title} subtitle={item.subtitle} onSelected={props.onSelected}/>
    )
  }

  let items = null;
  if (props.groupBy) {
    const sorted = props.groupBy ? sort(props.data, props.groupBy) : props.data;
    const grouped = group(props.data, props.groupBy);
    items = renderGroups(grouped);
  } else {
    items = props.data.map(renderItem);
  }

  return (
    <div className="list">
      {items}
    </div>
  );
};

export default List;
