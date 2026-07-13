import { ContactManager } from "@/components/ContactManager";
import { sampleContacts } from "@/lib/contacts";

export default function Home() {
  return <ContactManager initialContacts={sampleContacts} />;
}
