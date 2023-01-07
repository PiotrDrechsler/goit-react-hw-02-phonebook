import PropTypes from 'prop-types';

export const ContactList = ({ contacts, children, deleteContact }) => {
  return (
    <>
      {children}
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <p>
              {name} <br />
              {number}
            </p>
            <button
              onClick={() => {
                deleteContact(id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func,
};
