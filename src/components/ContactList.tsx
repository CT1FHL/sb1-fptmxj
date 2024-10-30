import React from 'react';
import { Contact } from '../App';
import { Radio, MapPin, Clock } from 'lucide-react';

type ContactListProps = {
  contacts: Contact[];
};

export default function ContactList({ contacts }: ContactListProps) {
  if (contacts.length === 0) {
    return (
      <div className="text-center py-12">
        <Radio className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900">No contacts yet</h3>
        <p className="text-gray-500">Start adding your QSO contacts using the form above.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {contacts.map((contact) => (
        <div
          key={contact.id}
          className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6"
        >
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-bold text-blue-600">{contact.callsign}</h3>
            <span className="px-2 py-1 text-sm rounded-full bg-blue-100 text-blue-800">
              {contact.mode}
            </span>
          </div>
          
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{contact.date} {contact.time}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Radio className="h-4 w-4" />
              <span>{contact.frequency} MHz</span>
            </div>
            
            {contact.qth && (
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{contact.qth}</span>
              </div>
            )}
          </div>

          {(contact.name || contact.notes) && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              {contact.name && (
                <p className="text-sm font-medium text-gray-900">{contact.name}</p>
              )}
              {contact.notes && (
                <p className="mt-1 text-sm text-gray-500">{contact.notes}</p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}