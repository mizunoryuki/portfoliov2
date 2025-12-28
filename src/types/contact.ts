import type { ReactNode } from "react";

export interface Contact {
  name: string;
  id: string;
  url: string;
  icon: ReactNode;
}
export interface ContactProps {
  contact: Contact;
}
