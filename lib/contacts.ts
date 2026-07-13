import type { Contact } from "@/types/contact";

export const sampleContacts: Contact[] = [
  {
    id: 1,
    name: "研究 太郎",
    phone: "000-0000-0001",
    email: "taro@example.invalid",
    department: "ロボット研究室",
    favorite: true,
  },
  {
    id: 2,
    name: "情報 花子",
    phone: "000-0000-0002",
    email: "hanako@example.invalid",
    department: "情報システム研究室",
    favorite: false,
  },
  {
    id: 3,
    name: "制御 次郎",
    phone: "000-0000-0003",
    email: "jiro@example.invalid",
    department: "制御工学研究室",
    favorite: false,
  },
];

let contacts: Contact[] = [...sampleContacts];

export function getContacts() {
  return contacts;
}

export function searchContacts(query: string) {
  const loweredQuery = query.toLowerCase();

  return contacts.filter((contact) => {
    return (
      contact.name.toLowerCase().includes(loweredQuery) ||
      contact.phone.includes(loweredQuery) ||
      contact.email.toLowerCase().includes(loweredQuery)
    );
  });
}

export function addContact(data: any) {
  const newContact = {
    id: contacts.length,
    name: data.name,
    phone: data.phone,
    email: data.email,
    department: data.department,
    memo: data.memo,
    favorite: false,
  };

  contacts.push(newContact);
  return newContact;
}

export function updateContact(id: number, data: any) {
  contacts = contacts.map((contact) =>
    contact.id === id ? { ...contact, ...data } : contact,
  );

  return contacts.find((contact) => contact.id === id);
}

export function deleteContact(id: number) {
  contacts = contacts.filter((_, index) => index !== id);
}

export function toggleFavorite(id: number) {
  const contact = contacts.find((item) => item.id === id);

  if (contact) {
    contact.favorite = !contact.favorite;
  }

  return contact;
}
