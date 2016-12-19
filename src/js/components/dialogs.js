import React from 'react';

//components
import { Button, Icon, Panel } from 'seito';

// style
import './dialogs.scss';

/**
 * Confirm Dialog
 */
const ConfirmDialog = ({icon, title, message, onOK, onCancel, onClose, children, toggleDialog }) => {

  const handleOK = () => {
    onOK();
  }

  const handleCancel = () => {
    onCancel ? onCancel() : handleClose();
  }

  const handleClose = () => {
    toggleDialog(null);
  }

  const actions = [ <Icon icon="close" action={handleClose}/> ];

  return (
    <Panel icon={icon} title={title} actions={actions} className="window dialog" collapsable={false} collapsed={false}>
      <div className="message">{children}</div>
      <div className="buttons">
        <Button label="CANCEL" className="accent" action={handleCancel}/>
        <Button label="OK" className="accent" action={handleOK}/>
      </div>
    </Panel>
  )
}

export { ConfirmDialog }
