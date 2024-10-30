import React from 'react';
import { Radio } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-3">
          <Radio className="h-8 w-8 text-blue-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Ham Radio Logger</h1>
            <p className="text-sm text-gray-600">Track your QSO contacts</p>
          </div>
        </div>
      </div>
    </header>
  );
}