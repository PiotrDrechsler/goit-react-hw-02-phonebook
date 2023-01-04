import PropTypes from 'prop-types';

export const ContactList = ({ contacts, children }) => {
  return (
    <>
      <h2>Contacts</h2>
      {children}
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <p>
              {name} <br />
              {number}
            </p>
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
};
