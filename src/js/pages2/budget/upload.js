import React from 'react';
import { observable, computed } from 'mobx';
import { observer } from 'mobx-react';
import { Button, Form, Field, Card, Tabs, Tab, Stack } from 'seito';
import './upload.scss';

class UploadStore {
  @observable _upload = null;
  @computed get upload() {
    return this._upload || {
      path: '',
      base64: '',
      properties: []
    };
  }
}

const store = new UploadStore();

const Bar = (props) => {
  return (
    <div className="bar">
      {props.children}
    </div>
  )
}

const DropArea = (props) => {
  return (
    <div className="drop-area">
      <img src="./droparea.jpg" />
      <h3>Arrastrar PDF</h3>
      <h4>o</h4>
      <Button label="Elegir Archivo"/>
    </div>
  )
}

class UploadFileChooser extends React.Component {
  render() {
    return (
      <div className="upload-file">
        <DropArea />
      </div>
    )
  }
}

class UploadPreview extends React.Component {
  render() {
    return (
      <div className="upload-preview">
        <div className="file-preview">
          <img src="" />
        </div>
        <Form className="file-data" title="Propiedades PDF">
          <Field id="detail"   label="Nombre"   value="" readOnly/>
          <Field id="format"   label="Formato"  value="" readOnly />
          <Field id="material" label="Material" value="" readOnly />
          <Field id="idioma"   label="Idioma"   value="" readOnly />
        </Form>
        <Button text="OK" />
      </div>
    )
  }
}

class UploadProgress extends React.Component {
  render() {
    return (
      <div className="upload-progress">
          <h4>Subida de Fichero</h4>
          <progress value="" />
          <h4>Validación </h4>
          <progress value="" />
      </div>
    )
  }
}

class UploadWizard extends React.Component {
  state = {
    tab: 0
  }
  handleChangeTab = (tab) => {
    this.setState({ tab });
  }
  render() {
    return (
      <div className="upload-wizard">
        <Tabs selected={this.state.tab} onChange={this.handleChangeTab}>
          <Tab label="Select File"/>
          <Tab label="Preview"/>
          <Tab label="Upload"/>
          <Tab label="Resume"/>
        </Tabs>
        <Stack selected={this.state.tab}>
          <UploadFileChooser />
          <UploadPreview />
          <UploadProgress />
          <div>Resume</div>
        </Stack>
      </div>
    )
  }
}

export { UploadWizard }
