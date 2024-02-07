import Actions from '../Featured/ProductCard/Actions';
import DiscountPrice from '../Featured/ProductCard/DiscountPrice';
import Discount from '../Featured/ProductCard/Discount';
import HeartButton from '../Featured/ProductCard/HeartButton';
import Image from '../Featured/ProductCard/Image';
import Name from '../Featured/ProductCard/Name';
import Price from '../Featured/ProductCard/Price';
import ProductCard from '../Featured/ProductCard/Product';
import ShoppingCartButton from '../Featured/ProductCard/ShoppingCartButton';
const asset = (path) => `/storage/images/${path}`;

const ProductsGrid = ({ title, products }) => {
  return (
    <div className='mt-8 rounded-xl bg-gray-100 pb-12'>
      <h1 className="text-2xl font-bold mb-8 pt-8 pl-8">{title}</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 px-4">
        {products.map((product, index) => (
          <ProductCard key={index}>
            <Image path={asset(product.image)} alt={product.name} />
            <Name name={product.name} />
            <Actions>
              <HeartButton />
              <ShoppingCartButton />
            </Actions>
            <div className='flex direction-column gap-4 pl-4'>
              <DiscountPrice price={product.price + 10} />
              <Discount discount={10} />
            </div>
            <div className='pl-4'>
              <Price price={product.price} />
            </div>
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
export default ProductsGrid;
