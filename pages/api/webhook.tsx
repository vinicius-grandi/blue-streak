import { NextApiResponse, NextApiRequest } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  if (method !== 'POST') {
    return res.send({ message: 'Only POST requests allowed' });
  }
  return res.send({ message: 'meme' });
}
