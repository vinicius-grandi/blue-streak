import { NextApiResponse, NextApiRequest } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = req.method;
  if (method !== 'POST') {
    res.send({ message: 'Only POST requests allowed' });
    return;
  }
}
