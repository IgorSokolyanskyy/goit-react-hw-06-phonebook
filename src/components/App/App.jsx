import { useState } from 'react';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import useLocalStorage from 'hooks';
import contactsData from 'data/contacts.json';
import { Container, Title, Subtitle, P } from './App.styled';
import { nanoid } from 'nanoid';

export default function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', contactsData);
  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }
    if (contacts.find(contact => contact.number === number)) {
      alert(`${number} is already in contacts.`);
      return;
    }

    setContacts(prevState => [contact, ...prevState]);
  };

  const deleteContact = contactId =>
    setContacts(contacts.filter(({ id }) => id !== contactId));

  const changeFilter = e => setFilter(e.currentTarget.value);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Container>
      <Title>Phonebook</Title>

      <ContactForm onSubmit={addContact} />

      <Subtitle>Contacts</Subtitle>

      {contacts.length > 1 && <Filter value={filter} onChange={changeFilter} />}
      {contacts.length ? (
        <ContactList
          contacts={getVisibleContacts()}
          onDeleteContact={deleteContact}
        />
      ) : (
        <P>Your phonebook is empty. Please add contact.</P>
      )}
    </Container>
  );
}
