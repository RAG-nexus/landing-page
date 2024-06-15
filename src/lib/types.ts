export interface NavLinkProps {
  url: string;
  children: React.ReactNode;
}

export interface ContactFormProps {
  name: string;
  email: string;
  phone?: string;
  website?: string;
  linkedin?: string;
  newsletter: boolean;
}
