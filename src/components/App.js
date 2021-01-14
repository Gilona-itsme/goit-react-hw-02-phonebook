import React, { Component } from "react";
//import { v4 as uuidv4 } from "uuid";

import Container from "./Container";
import Section from "./Section";
import FormContact from "./FormContact";
import ContactList from "./ContactList";
import Filter from "./Filter";

export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", phone: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", phone: "443-89-12" },
      { id: "id-3", name: "Eden Clements", phone: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", phone: "227-91-26" },
    ],
    filter: "",
  };

  handleNewContact = (newContact) => {
    this.setState(({ contacts }) => {
      return {
        contacts: [...contacts, newContact],
      };
    });
  };

  handleCheckUniqueContact = (name) => {
    const { contacts } = this.state;

    const isExitContact = contacts.find((contact) => contact.name === name);

    isExitContact && alert(`${name} is already in contacts`);

    return !isExitContact;
  };

  handleRemoveContact = (id) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter((contact) => contact.id !== id),
    }));
  };

  handleChangeFilter = (filter) => {
    this.setState({ filter });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;

    const visibleContacts = this.getVisibleContacts();
    return (
      <Container>
        <Section title="Phonebook">
          <FormContact
            onAddContact={this.handleNewContact}
            onCheckUnique={this.handleCheckUniqueContact}
          />
        </Section>
        <Section title="Find contact by name">
          <Filter value={filter} onChangeFilter={this.handleChangeFilter} />
        </Section>
        <Section title="Contacts">
          <ContactList
            contacts={visibleContacts}
            onRemove={this.handleRemoveContact}
          />
        </Section>
      </Container>
    );
  }
}
