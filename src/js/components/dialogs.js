import React from 'react';

//components
import { Button } from './button';
import Panel from './panel';

// style
import './dialogs.scss';

/**
 * Confirm Dialog
 */
const ConfirmDialog = ({icon, title, message, onOK, onCancel, onClose, children, toggleDialog}) => {

  const handleOK = () => {
    onOK();
  }

  const handleCancel = () => {
    onCancel ? onCancel() : handleClose();
  }

  const handleClose = () => {
    toggleDialog(null);
  }

  const actions = [{ icon: 'close', do: () => { handleClose() }}];

  return (
    <Panel icon={icon} title={title} actions={actions} className="window dialog">
      <div className="message">{children}</div>
      <div className="buttons">
        <Button label="CANCEL" className="accent" action={handleCancel}/>
        <Button label="OK" className="accent" action={handleOK}/>
      </div>
    </Panel>
  )
}

export { ConfirmDialog }
