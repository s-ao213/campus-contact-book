export function formatPhoneNumber(phone: string) {
  return (
    phone.substring(0, 3) +
    "-" +
    phone.substring(3, 7) +
    "-" +
    phone.substring(7)
  );
}

export function createDisplayName(name: string, department?: string) {
  return name + department ? ` (${department})` : "";
}
