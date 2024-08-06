'use client';

interface Props {
  authKey: string;
  authToken: string;
}

export default function LuzmoClientComponent({ authKey, authToken }: Props) {
  console.log({ authKey, authToken });

  return <section>Luzmo client component</section>;
}
