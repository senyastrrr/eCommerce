import { ProductCard, useDiscountedProducts } from "@/entites/product";

export function DiscountedProducts() {

  const productsResponse = useDiscountedProducts();

  if (productsResponse.isSuccess)
    return (
      <div className='mt-8 rounded-xl bg-gray-100 pb-12'>
        <h1 className="text-4xl font-bold mb-8 pt-8 pl-8">{"Скидки"}</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 px-4">
          {productsResponse.data.map((item, index) => (
            <ProductCard key={index} product={item.product} discount={item.discount_rate} />
          ))}
        </div>
      </div>
    );
}
