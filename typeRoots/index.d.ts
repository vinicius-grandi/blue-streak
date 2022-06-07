// eslint-disable-next-line max-classes-per-file
declare module 'sib-api-v3-sdk' {
  type Cc = import('sib-api-v3-typescript').CreateContact;
  type Ca = import('sib-api-v3-typescript').ContactsApi;
  class ContactsApi implements Ca {
    public createContact(
      createContact: CreateContact,
      options?: { headers: { [name: string]: string; };
      }): Promise<{ response: IncomingMessage; body: CreateUpdateContactModel; }>;
  }
  class CreateContact implements Cc {
    email: string;

    attributes: object;
  }
  class ApiClient {
    static instance: {
      authentications: {
        'api-key': { apiKey: string };
      };
    };
  }
  export = { ContactsApi, CreateContact, ApiClient };
}
