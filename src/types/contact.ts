import type { ReactNode } from "react";

export type Contact = {
  name: string;
  id: string;
  url: string;
  icon: ReactNode;
};
export type ContactProps = {
  contact: Contact;
};
