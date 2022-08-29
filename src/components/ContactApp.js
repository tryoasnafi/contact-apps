import ContactList from './ContactList.js';
import { getData } from "../utils/data.js";
import React from 'react';

class ContactApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: getData(),
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  onDeleteHandler(id) {
    const newContacts = this.state.contacts.filter((contact) => contact.id !== id);
    this.setState({
      contacts: newContacts,
    });
  }

  render() {
    return (
      <div className="contact-app">
        <h1>Daftar Kontak</h1>
        <ContactList contacts={this.state.contacts} onDelete={this.onDeleteHandler} />
      </div>
    );
  }
}

export default ContactApp;