import Section from './section';
import shortid from 'shortid';
import * as contactsActions from '../redux/contacts/contacts-actions';
import { connect } from 'react-redux';

function ContactList({ contacts, filter, deleteContact }) {
  const filterContacts = () => {
    return contacts.filter(item => item.name.toLowerCase().includes(filter));
  };

  return (
    <Section title="Contacts">
      {filterContacts().map(item => (
        <div key={shortid.generate()}>
          {item.name} {item.number}
          <button onClick={() => deleteContact(item.id)}>delete</button>
        </div>
      ))}
    </Section>
  );
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts,
    filter: state.filter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteContact: id => dispatch(contactsActions.deleteContact(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
