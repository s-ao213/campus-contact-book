import { ContactList } from "@/components/ContactList";
import { sampleContacts } from "@/lib/contacts";

export default function Home() {
  return (
    <main className="page-shell">
      <header className="page-header">
        <p>Campus Contact Book</p>
        <h1>研究室の連絡先</h1>
      </header>
      <ContactList contacts={sampleContacts} />
    </main>
  );
}
