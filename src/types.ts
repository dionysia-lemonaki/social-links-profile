export interface Link {
  label: string;
  url: string;
}

export interface Person {
  avatar: string;
  name: string;
  location: string;
  bio: string;
  links: Link[];
}
