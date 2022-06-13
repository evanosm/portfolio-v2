import stream from 'stream';
import { promisify } from 'util';
import fetch from 'node-fetch';

const pipeline = promisify(stream.pipeline);
const url = 'https://cdn.discordapp.com/attachments/742748593500192869/984037340248948766/cv-evan-osmont.pdf';

const handler = async (req, res) => {
  const response = await fetch(url); // replace this with your API call & options
  if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=evan-osmont.pdf');
  await pipeline(response.body, res);
};

export default handler;