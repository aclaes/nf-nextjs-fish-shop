import Head from 'next/head';
import {
  getAllProducts,
  getProductById,
} from '../../src/services/productsService';

export function getStaticPaths() {
  const products = getAllProducts();

  return {
    paths: products.map((product) => ({ params: { id: product.id } })),
    fallback: false,
  };
}

export function getStaticProps(context) {
  const product = getProductById(context.params.id);

  return {
    props: {
      product,
    },
  };
}

export default function Product({ product }) {
  const { id, name, description, price, category } = product;

  return (
    <>
      <Head>
        <title>Produkt: {name}</title>
      </Head>
      <h1>Produkt: {name}</h1>
      <p>ID: {id}</p>
      <h2>Beschreibung</h2>
      <p>{description}</p>
      <h2>Preis</h2>
      <p>{price}</p>
      <h2>Kategorie</h2>
      <p>{category}</p>
    </>
  );
}
