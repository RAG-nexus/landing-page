export interface NavLinkProps {
  url: string;
  children: React.ReactNode;
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  website?: string;
  linkedin?: string;
  newsletter: boolean;
}
