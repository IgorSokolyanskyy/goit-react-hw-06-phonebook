import PropTypes from 'prop-types';
import { ImCross } from 'react-icons/im';
import { deleteContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <p>
        {name}: {number}
      </p>
      <ImCross
        onClick={handleDelete}
        color="#f13131"
        size="17px"
        cursor="pointer"
        title="Delete contact"
        aria-label="Delete contact"
      />
    </>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
