import { ProductCard, useDiscountedProducts } from "@/entites/product";

export function DiscountedProducts() {

  const products = useDiscountedProducts();
  console.log(products.isSuccess ? products : products.error);

  if (products.isSuccess)
    return (
      <div className='mt-8 rounded-xl bg-gray-100 pb-12'>
        <h1 className="text-4xl font-bold mb-8 pt-8 pl-8">{"Скидки"}</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 px-4">
          {products.data.map((product, index) => (
            <ProductCard key={index} product={product} discount={index} />
          ))}
        </div>
      </div>
    );
}
