import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import { FaArrowLeft } from 'react-icons/fa6';

export default function ProductDetails({ product }) {
  return (
    <div>
      <Head>
        <title>Product Detail Page</title>
      </Head>

      <div
        style={{
          background:
            'linear-gradient(90deg, #020024 0%, #090979 35%, #00d4ff 100%)',
        }}
        className="p-6"
      >
        <div>
          <div className="flex justify-start items-center mb-8 px-2 container mx-auto">
            <Link href="/products" className="btn btn-ghost btn-circle">
              <FaArrowLeft className="text-2xl text-base-100" />
            </Link>
          </div>
          <div className="flex p-6 bg-base-100 rounded-md my-10 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto shadow-lg">
            {/* Left side */}
            <div className="flex-auto w-2/6 ">
              <div className="flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-[400px] h-[400px] object-contain"
                />
              </div>
            </div>
            {/* Left side */}
            {/* Right side */}
            <div className="flex-auto w-3/6  px-8 py-2">
              <span className="badge badge-neutral mb-2">
                {product.category}
              </span>
              <h1 className="font-bold text-xl mb-2">{product.title}</h1>
              <div className="flex items-center mb-6">
                <div className="rating rating-sm mr-2">
                  {[...Array(5)].map((_, index) => (
                    <input
                      key={index}
                      type="radio"
                      name={`rating-${product.id}`}
                      className="mask mask-star-2 bg-orange-400"
                      checked={index + 1 === Math.round(product.rating.rate)}
                      readOnly
                    />
                  ))}
                </div>
                <div className="text-sm">{product.rating.count} reviews</div>
              </div>
              <div className="font-bold text-3xl t p-2 mb-4">
                &#3647;{product.price}
              </div>
              <div>{product.description}</div>
            </div>
            {/* Right side */}
          </div>
        </div>
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  const response = await fetch(
    `https://fakestoreapi.com/products/${context.params.productId}`
  );
  const product = await response.json();
  console.log(product);

  return {
    props: {
      product,
    },
  };
}
