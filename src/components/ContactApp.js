import ContactList from './ContactList.js';
import { getData } from "../utils/data.js";
import React from 'react';
import ContactInput from './ContactInput.js';

class ContactApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: getData(),
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddContactHandler = this.onAddContactHandler.bind(this);
  }

  onDeleteHandler(id) {
    const newContacts = this.state.contacts.filter((contact) => contact.id !== id);
    this.setState({
      contacts: newContacts,
    });
  }

  onAddContactHandler({ name, tag }) {
    this.setState((state) => {
      return {
        contacts: [
          ...state.contacts,
          {
            id: +new Date(),
            name,
            tag,
            imageUrl: '/images/default.jpg',
          }
        ]
      }
    })
  }

  render() {
    return (
      <div className="contact-app">
        <h1>Aplikasi Kontak</h1>
        <h2>Tambah Kontak</h2>
        <ContactInput addContact={this.onAddContactHandler} />
        <h2>Daftar Kontak</h2>
        <ContactList contacts={this.state.contacts} onDelete={this.onDeleteHandler} />
      </div>
    );
  }
}

export default ContactApp;