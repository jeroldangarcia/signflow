import React from 'react';
import mobx from 'mobx';
import { computed, observable, action} from 'mobx';
import { observer } from 'mobx-react';
import API from './apiClient';
import { ConfirmDialog } from 'tatami';
import { FAB, Icon, Icon2, Picon, List, SimpleListItem, Form, Field, Card } from 'seito';
import './contacts.scss';


class ContactStore {

  @observable _contacts = [];
  @observable _contact = {};

  @computed get contacts() {
    return this._contacts;
  }
  set contacts(contacts) {
    this._contacts = contacts;
  }
  @computed get contact() {
    return this._contact;
  }
  set contact(contact) {
    this._contact = contact;
  }
}


const store = new ContactStore();


const ContactFactory = ({ _id = '#0000', name, family_name, email = 'user@email.com', tfn = '555 6453423',avatar='/user.png', rol = 'manager', cia = 'YWANA' }) => {
  const contact = {
    id : _id,
    avatar,
    name: name + ' ' + family_name,
    email,
    tfn,
    rol,
    cia
  }
  return contact;
}


const controller = {
  getAll() {
    API.customers((data) => {
      let newContacts = data.users.map( item => {
        return ContactFactory(item);
      });
      store.contacts = newContacts;
    }, console.log);
  },
  select({ id }) { console.log(id)
    const nextContact = store.contacts.filter( contact => contact.id === id )[0];
    store.contact = nextContact;
  }
}


@observer
class ContactDialog extends React.Component {
  onClose = () => {
    this.props.toggleDialog(null);
  }
  render() {
    const contact = store.contact;
    return (
      <div className="contact-dialog full-screen">
        <header>
          <div className="title-content">
            <div className="avatar"><img src={contact.avatar}/></div>
            <div className="text">
              <span className="name">{contact.name}</span>
              <span className="cia">{contact.cia}</span>
            </div>
          </div>
          <div className="title-actions">
            <Icon2 icon="edit" clickable />
            <div className="close-icon">
              <Icon icon="close" className="clickable" action={this.onClose}/>
            </div>
          </div>
        </header>
        <main>
          <Form title="Detalles de Contacto">
            <Field icon="email" label="" value={contact.email} readOnly={true}/>
            <Field icon="phone" label="tfn" value={contact.email} readOnly={true}/>
          </Form>
          <Form title="Actividad">
            xxx
          </Form>
        </main>
        <footer>
          <Icon2 icon="local_play" clickable/>
          <Icon2 icon="file_upload" clickable/>
        </footer>
      </div>
    )
  }
}


class ContactCard extends React.Component {
  handleSelection = () => {
    this.props.onSelection({ id: this.props.id });
  }
  render() {
    const avatar = this.props.avatar ? this.props.avatar : 'user.png';
    return (
      <Card className="contact-card">
        <header onClick={this.handleSelection}>
            <Picon src={avatar}/>
            <div className="titles">
              <div className="name">{this.props.title}</div>
              <div className="cia">{this.props.subtitle}</div>
            </div>
            <Icon2 icon="more_vert" clickable/>
        </header>
        <main onClick={this.handleSelection}>
          <Field icon="email" label="" value="j_smith@email.com" readOnly={true} />
          <Field icon="phone" label="" value="555-647676798" readOnly={true} />
        </main>
        <footer></footer>
      </Card>
    )
  }
}


@observer
class ContactList extends React.Component {
  componentWillMount() {
    controller.getAll();
  }
  handleContactDialog = (contact) => {
    controller.select(contact);
    this.props.toggleDialog(<ContactDialog toggleDialog={this.props.toggleDialog}/>)
  }
  render() {
    const listItems = store.contacts.map(contact => {
      return {
        id: contact.id,
        avatar: contact.avatar,
        caption: contact.id,
        title: contact.name,
        subtitle: contact.email,
        description: '',
        groupBy: contact.rol.capitalize()
      };
    })
    return (
      <div className="contact-list">
        <List className="grid" data={listItems} renderer={ContactCard} onSelection={this.handleContactDialog}/>
        <FAB icon="person_add" action={this.handleAddContact}/>
      </div>
    )
  }
}


String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}


export default ContactList;
