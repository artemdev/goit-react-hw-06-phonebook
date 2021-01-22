import './App.css';
import { useEffect } from 'react';
import ContactList from './components/contactList';
import ContactForm from './components/contactForm';
import Filter from './components/filter';
import { connect } from 'react-redux';

function App({ contacts }) {
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts,
  };
};

export default connect(mapStateToProps)(App);
