import { NextApiResponse, NextApiRequest } from 'next';
import { XMLParser } from 'fast-xml-parser';
import axios from 'axios';
import SibApiV3Sdk from 'sib-api-v3-sdk';
import logger from 'jet-logger';

const token = process.env.TOKEN ?? '';
const email = process.env.EMAIL ?? '';
const key = process.env.KEY ?? '';

const parser = new XMLParser();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  if (method !== 'POST') {
    logger.err('payment denied');
    return res.send({ message: 'Only POST requests allowed' });
  }

  const { notificationCode } = req.body;
  const url = `https://ws.pagseguro.uol.com.br/v3/transactions/notifications/${notificationCode}?email=${email}&token=${token}`;
  try {
    const response = await axios.get(url);
    const xmlData = parser.parse(response.data);
    const {
      sender: { email: senderEmail, name: fullName },
      paymentMethod: { code },
    } = xmlData.transaction;
    const partsOfName = fullName.split(' ');
    const FIRSTNAME = partsOfName.shift();

    if (code > 299 || code < 200) {
      return res.send({ message: 'payment denied' });
    }

    const defaultClient = SibApiV3Sdk.ApiClient.instance;
    const apiKey = defaultClient.authentications['api-key'];
    apiKey.apiKey = key;

    const apiInstance = new SibApiV3Sdk.ContactsApi();

    const createContact = new SibApiV3Sdk.CreateContact();
    createContact.email = senderEmail;
    createContact.attributes = {
      FIRSTNAME,
      LASTNAME: partsOfName.join(' '),
    };

    apiInstance.createContact(createContact).then(
      (data) => {
        logger.info(
          `API called successfully. Returned data: ${JSON.stringify(data)}`,
        );
      },
      (error) => {
        logger.err(error);
      },
    );
  } catch (err) {
    if (err instanceof Error) {
      logger.err(err);
    }
  }
  return res.send({ message: 'success' });
}
