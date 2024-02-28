import { ProductCard } from "@/entites/product";

export function ProductsGrid({ title, products }) {
  return (
    <div className='mt-8 rounded-xl bg-gray-100 pb-12'>
      <h1 className="text-2xl font-bold mb-8 pt-8 pl-8">{title}</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 px-4">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} discount={index}/>
        ))}
      </div>
    </div>
  );
}
