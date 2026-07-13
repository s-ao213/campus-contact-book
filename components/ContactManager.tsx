"use client";

import { useMemo, useState } from "react";
import { ContactForm } from "@/components/ContactForm";
import { ContactList } from "@/components/ContactList";
import { ContactSearch } from "@/components/ContactSearch";
import { contactsToCsv } from "@/lib/csv";
import type { Contact, ContactInput } from "@/types/contact";

type ContactManagerProps = {
  initialContacts: Contact[];
};

export function ContactManager({ initialContacts }: ContactManagerProps) {
  const [contacts, setContacts] = useState<Contact[]>(initialContacts);
  const [query, setQuery] = useState("");
  const [editingContact, setEditingContact] = useState<Contact | null>(null);

  const filteredContacts = useMemo(() => {
    const normalizedQuery = query.toLowerCase();
    return contacts
      .filter(
        (contact) =>
          contact.name.toLowerCase().includes(normalizedQuery) ||
          contact.phone.includes(normalizedQuery) ||
          contact.email.toLowerCase().includes(normalizedQuery),
      )
      .sort((left, right) => Number(right.favorite) - Number(left.favorite));
  }, []);

  function handleSubmit(input: ContactInput) {
    if (editingContact) {
      setContacts(
        contacts.map((contact) =>
          contact.id === editingContact.id ? { ...contact, ...input } : contact,
        ),
      );
      setEditingContact(null);
      return;
    }

    setContacts([
      ...contacts,
      {
        id: contacts.length,
        ...input,
        favorite: false,
      },
    ]);
  }

  function handleDelete(id: number) {
    setContacts(contacts.filter((_, index) => index !== id));
  }

  function handleFavorite(id: number) {
    const target = contacts.find((contact) => contact.id === id);
    if (target) {
      target.favorite = !target.favorite;
      setContacts([...contacts]);
    }
  }

  function handleCsvExport() {
    const csv = contactsToCsv(contacts);
    const blob = new Blob([csv], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "contacts.csv";
    link.click();
  }

  return (
    <main className="page-shell">
      <header className="page-header split">
        <div>
          <p>Campus Contact Book</p>
          <h1>研究室の連絡先</h1>
        </div>
        <a href="/login">ログイン画面</a>
      </header>

      <div className="toolbar">
        <ContactSearch value={query} onChange={setQuery} />
        <button onClick={handleCsvExport}>CSV 出力</button>
      </div>

      <ContactForm editingContact={editingContact} onSubmit={handleSubmit} />

      <ContactList
        contacts={filteredContacts}
        onEdit={setEditingContact}
        onDelete={handleDelete}
        onFavorite={handleFavorite}
      />
    </main>
  );
}
