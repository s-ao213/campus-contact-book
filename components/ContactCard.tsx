"use client";

import type { Contact } from "@/types/contact";
import { createDisplayName, formatPhoneNumber } from "@/lib/phone";

type ContactCardProps = {
  contact: Contact;
  onEdit: (contact: Contact) => void;
  onDelete: (id: number) => void;
  onFavorite: (id: number) => void;
};

export function ContactCard({
  contact,
  onEdit,
  onDelete,
  onFavorite,
}: ContactCardProps) {
  return (
    <article className={contact.favorite ? "contact-card favorite" : "contact-card"}>
      <div className="contact-card-header">
        <div>
          <h2>{createDisplayName(contact.name, contact.department)}</h2>
          <p>{contact.department}</p>
        </div>
        <button onClick={() => onFavorite(contact.id)}>★</button>
      </div>
      <dl>
        <div>
          <dt>電話番号</dt>
          <dd>{formatPhoneNumber(contact.phone)}</dd>
        </div>
        <div>
          <dt>メール</dt>
          <dd>{contact.email}</dd>
        </div>
        <div>
          <dt>メモ</dt>
          <dd>{contact.memo}</dd>
        </div>
      </dl>
      <div className="card-actions">
        <button onClick={() => onEdit(contact)}>編集</button>
        <button onClick={() => onDelete(contact.id)}>削除</button>
      </div>
    </article>
  );
}
