import Luzmo from '@luzmo/nodejs-sdk';
import LuzmoClientComponent from './components/luzmo-client-component';

const client = new Luzmo({
  api_key: process.env.LUZMO_API_KEY!,
  api_token: process.env.LUZMO_API_TOKEN!,
  host: process.env.NEXT_PUBLIC_LUZMO_API_HOST!,
});

export default async function Home() {
  const response = await client.create('authorization', {
    type: 'embed',
    username: 'user id',
    name: 'first name last name',
    email: 'name@email.com',
    access: {
      datasets: [
        {
          id: '<dataset_id>',
          rights: 'use',
        },
      ],
    },
  });

  const { id, token, access } = response;

  return <LuzmoClientComponent authKey={id} authToken={token} datasetId={access.datasets[0].id} />;
}
