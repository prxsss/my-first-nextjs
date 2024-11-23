import ProductListing from './productListing';

export default function ProductListings({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-10">
      {products.map((product) => (
        <ProductListing product={product} key={product.id} />
      ))}
    </div>
  );
}
