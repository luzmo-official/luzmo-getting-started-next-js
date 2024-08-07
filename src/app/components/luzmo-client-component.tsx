'use client';

interface Access {
  id: string;
  rights: {
    Own: boolean;
    Use: boolean;
    Read: boolean;
    Modify: boolean;
  };
}

interface Props {
  authKey: string;
  authToken: string;
  datasets?: Access[];
  dashboards?: Access[];
  collections?: Access[];
}

export default function LuzmoClientComponent({ authKey, authToken, datasets, dashboards, collections }: Props) {
  console.log({ authKey, authToken, datasets, dashboards, collections });

  return <section>Luzmo client component</section>;
}
