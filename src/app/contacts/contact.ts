export class Resource {
  _id?: string;
  name: string;
  description: string;
  email: string;
  phone: {
    main: string;
    fax?: string
  };
  address: {
    street: string;
    floor?: string;
    city: string;
    state: string;
    zip: string;
  };
  region: string;
  communities: string[];
  services: string[]
}
