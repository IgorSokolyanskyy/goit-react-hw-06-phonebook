import { Label, Input, Subtitle } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import { setFilter } from '../../redux/contactsSlice';
import { getContacts } from 'redux/selectors';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter) || '';
  const contacts = useSelector(getContacts) || [];

  const onChangeFilter = e => {
    const { value } = e.target;
    const trimmedValue = value.trim();

    if (typeof trimmedValue === 'string') {
      dispatch(setFilter(trimmedValue));
    }
  };

  return (
    <>
      <Subtitle>Contacts</Subtitle>

      {contacts.length ? (
        <Label>
          Find contacts by name:
          <Input type="text" value={filter} onChange={onChangeFilter} />
        </Label>
      ) : (
        <p>Your phonebook is empty. Please add contact.</p>
      )}
    </>
  );
}
