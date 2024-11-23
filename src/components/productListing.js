import Link from 'next/link';
import Image from 'next/image';

export default function ProductListing({ product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="card bg-base-100 shadow-xl hover:-translate-y-2 transition-transform will-change-transform"
      key={product.id}
    >
      <figure className="p-4">
        <Image
          src={product.image}
          alt={product.title}
          width={0}
          height={0}
          sizes="100vw"
          className="rounded-xl w-[258px] h-[147.43px] object-contain"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title">{product.title.substring(0, 40) + '...'}</h2>
        <p>{product.description.substring(0, 80) + '...'}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">&#3647;{product.price}</div>
        </div>
      </div>
    </Link>
  );
}
