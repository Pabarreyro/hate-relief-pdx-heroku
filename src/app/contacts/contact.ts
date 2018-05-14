export class Contact {
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
}
