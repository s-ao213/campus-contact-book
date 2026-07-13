import type { Contact } from "@/types/contact";

type ContactListProps = {
  contacts: Contact[];
};

export function ContactList({ contacts }: ContactListProps) {
  return (
    <section className="contact-list" aria-label="連絡先一覧">
      {contacts.map((contact) => (
        <article className="contact-card" key={contact.id}>
          <div>
            <h2>{contact.name}</h2>
            <p>{contact.department}</p>
          </div>
          <dl>
            <div>
              <dt>電話番号</dt>
              <dd>{contact.phone}</dd>
            </div>
            <div>
              <dt>メール</dt>
              <dd>{contact.email}</dd>
            </div>
          </dl>
        </article>
      ))}
    </section>
  );
}
