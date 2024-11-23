import Head from 'next/head';
import Image from 'next/image';
import product1 from '../../../public/assets/images/smart-watch-series-7.jpeg';
import Link from 'next/link';

import ProductListings from '@/components/ProductListings';

export default function Products({ products }) {
  console.log('products:', products);

  return (
    <>
      <Head>
        <title>Product Page</title>
      </Head>
      <div
        style={{
          background:
            'linear-gradient(90deg, #020024 0%, #090979 35%, #00d4ff 100%)',
        }}
        className="min-h-screen p-5 pt-[90px]"
      >
        <p className="text-center text-4xl p-4 font-bold text-base-100 mb-8">
          Products
        </p>
        <div className="container mx-auto my-10 p-2">
          <ProductListings products={products} />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch('https://fakestoreapi.com/products');
  const products = await response.json();

  return {
    props: {
      products,
    },
  };
}
