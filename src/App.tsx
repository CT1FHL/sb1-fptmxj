import React, { useState } from 'react';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

export type Contact = {
  id: string;
  callsign: string;
  date: string;
  time: string;
  frequency: string;
  mode: string;
  rst: string;
  name: string;
  qth: string;
  notes: string;
};

function App() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [showForm, setShowForm] = useState(false);

  const handleAddContact = (contactData: Omit<Contact, 'id'>) => {
    const newContact: Contact = {
      ...contactData,
      id: crypto.randomUUID(),
    };
    setContacts([newContact, ...contacts]);
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Contacts Log</h2>
          <button
            onClick={() => setShowForm(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Add Contact
          </button>
        </div>

        {showForm ? (
          <div className="mb-8 bg-white rounded-lg shadow-md p-6">
            <ContactForm
              onSubmit={handleAddContact}
              onCancel={() => setShowForm(false)}
            />
          </div>
        ) : null}

        <ContactList contacts={contacts} />
      </main>
    </div>
  );
}

export default App;