export type Contact = {
  id: number;
  name: string;
  phone: string;
  email: string;
  department: string;
  favorite: boolean;
  memo?: string;
};

export type ContactInput = {
  name: string;
  phone: string;
  email: string;
  department: string;
  memo: string;
};
