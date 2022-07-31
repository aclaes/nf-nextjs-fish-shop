import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Produkt: {id}</title>
      </Head>
      <h1>Produkt: {id}</h1>
    </>
  );
}
