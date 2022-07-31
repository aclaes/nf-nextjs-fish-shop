import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Category() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Kategorie: {id}</title>
      </Head>
      <h1>Kategorie: {id}</h1>
    </>
  );
}
