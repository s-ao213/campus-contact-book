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
