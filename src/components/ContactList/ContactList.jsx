import { List, Item } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import Contact from './Contact';

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(
    ({ name, number }) =>
      name.toLowerCase().includes(normalizedFilter) || number.includes(filter)
  );
};

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <Item key={id}>
          <Contact name={name} number={number} id={id} />
        </Item>
      ))}
    </List>
  );
}
