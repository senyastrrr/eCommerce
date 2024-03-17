import { useProductItemsByProductId } from '@/entites/product-item/api/queries';
import { ProductCarousel } from '@/widgets/product-carousel';
import { ProductImages } from '@/widgets/product-images';
import { ProductInfo } from '@/widgets/product-info';
import { usePage } from '@inertiajs/react';
import React from 'react';

function ProductDetails() {

  const id = usePage().props.id;
  const productItems = useProductItemsByProductId(id);

  if (productItems.isSuccess)
    return (
      <div className='flex mx-10 mt-8 md:flex-row gap-12 justify-center flex-col'>
        <ProductImages />
        <ProductCarousel />
        <ProductInfo productId={id} />
      </div>
    );
}
export default ProductDetails;