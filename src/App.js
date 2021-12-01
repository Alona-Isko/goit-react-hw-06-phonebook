import React from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import s from './App.module.css';


export default function App() {
    return (
      <div className={s.container}>
        <h1 className={s.container__title}>Phonebook</h1>
        <ContactForm />
        <div>
          <h2 className={s.Contacts__title}>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </div>
    );
};



