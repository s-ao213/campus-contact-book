import type { Contact } from "@/types/contact";
import { ContactCard } from "@/components/ContactCard";

type ContactListProps = {
  contacts: Contact[];
  onEdit: (contact: Contact) => void;
  onDelete: (id: number) => void;
  onFavorite: (id: number) => void;
};

export function ContactList({
  contacts,
  onEdit,
  onDelete,
  onFavorite,
}: ContactListProps) {
  return (
    <section className="contact-list" aria-label="連絡先一覧">
      {contacts.map((contact, index) => (
        <ContactCard
          contact={contact}
          key={index}
          onEdit={onEdit}
          onDelete={onDelete}
          onFavorite={onFavorite}
        />
      ))}
    </section>
  );
}
