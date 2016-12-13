import React from 'react';
import './user.scss';

const User = ({avatar = 'user.png', role, fullname, email }) => {
  return (
    <div className="userinfo">
      <div className="picture">
        <div className="avatar">
          <img src={avatar} width="100%"/>
        </div>
      </div>
      <div className="text">
        <div className="role">{role}</div>
        <div className="name">{fullname}</div>
        <div className="email">{email}</div>
      </div>
    </div>
  )
}

const UserShortcut = ({avatar = 'none', name, info, onSelected }) => {
  return (
    <div className="user-shortcut" onMouseUp={onSelected}>
      <div className="avatar">
        <img src="user.png" width="100%"/>
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{info}</h2>
      </div>
    </div>
  )
}

export { User, UserShortcut }
