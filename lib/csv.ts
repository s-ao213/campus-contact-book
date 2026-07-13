import type { Contact } from "@/types/contact";

export function contactsToCsv(contacts: Contact[]) {
  const header = ["name", "phone", "email", "department", "memo"];
  const rows = contacts.map((contact) => [
    contact.name,
    contact.phone,
    contact.email,
    contact.department,
    contact.memo ?? "",
  ]);

  return [header, ...rows].map((row) => row.join(",")).join("\n");
}
