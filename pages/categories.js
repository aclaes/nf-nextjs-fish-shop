import Head from 'next/head';
import Link from 'next/link';
import { getAllCategories } from '../src/services/categoriesService';

export async function getStaticProps() {
  const categories = await getAllCategories();

  return {
    props: { categories },
  };
}

export default function Categories({ categories }) {
  return (
    <>
      <Head>
        <title>Kategorien</title>
      </Head>
      <h1>Kategorien</h1>
      <p>Liste aller Kategorien</p>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link href={`/category/${category.id}`}>
              <a>{category.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
