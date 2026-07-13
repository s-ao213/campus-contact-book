"use client";

import { useState } from "react";
import type { Contact, ContactInput } from "@/types/contact";

type ContactFormProps = {
  editingContact?: Contact | null;
  onSubmit: (input: ContactInput) => void;
};

export function ContactForm({ editingContact, onSubmit }: ContactFormProps) {
  const [form, setForm] = useState<ContactInput>({
    name: editingContact?.name ?? "",
    phone: editingContact?.phone ?? "",
    email: editingContact?.email ?? "",
    department: editingContact?.department ?? "",
    memo: editingContact?.memo ?? "",
  });

  function updateField(field: keyof ContactInput, value: string) {
    setForm({ ...form, [field]: value });
  }

  return (
    <form
      className="contact-form"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(form);
      }}
    >
      <input
        placeholder="氏名"
        value={form.name}
        onChange={(event) => updateField("name", event.target.value)}
      />
      <input
        placeholder="電話番号"
        value={form.phone}
        onChange={(event) => updateField("phone", event.target.value)}
      />
      <input
        placeholder="メールアドレス"
        value={form.email}
        onChange={(event) => updateField("email", event.target.value)}
      />
      <input
        placeholder="所属"
        value={form.department}
        onChange={(event) => updateField("department", event.target.value)}
      />
      <textarea
        placeholder="メモ"
        value={form.memo}
        onChange={(event) => updateField("memo", event.target.value)}
      />
      <button type="submit">{editingContact ? "保存" : "新規登録"}</button>
    </form>
  );
}
