// eslint-disable-next-line max-classes-per-file
declare module 'sib-api-v3-sdk' {
  class ContactsApi {
    public createContact(
      createContact: CreateContact,
      options?: { headers: { [name: string]: string; };
      }): Promise<{ response: IncomingMessage; body: CreateUpdateContactModel; }>;
  }
  class CreateContact {
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
