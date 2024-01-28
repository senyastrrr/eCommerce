import ProductCard from '../ProductCard/Product';
const asset = (path) => `/storage/images/${path}`;

const ProductsGrid = ({ title, products }) => {
  return (
    <div className='mt-8 rounded-xl bg-gray-100'>
      <h1 className="text-2xl font-bold mb-8 pt-8 pl-8">{title}</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 px-4">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={asset(product.image)}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};
export default ProductsGrid;
