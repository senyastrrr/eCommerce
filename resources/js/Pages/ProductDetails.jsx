import { useProductItemsByProductId } from '@/entites/product-item/api/queries';
import { home } from '@/shared/routes/home-routes';
import { Header } from '@/widgets/header';
import { ProductCarousel } from '@/widgets/product-carousel';
import { ProductImages } from '@/widgets/product-images';
import { ProductInfo } from '@/widgets/product-info';
import { usePage } from '@inertiajs/react';
import React from 'react';

function ProductDetails() {

  const id = usePage().props.id;
  const discount = usePage().props.discount;
  const productItems = useProductItemsByProductId(id);

  if (productItems.isSuccess)
    return (
      <>
        <Header routes={home} />
        <div className='flex mx-10 mt-8 md:flex-row gap-12 justify-center flex-col'>
          <ProductImages products={productItems.data} />
          <ProductCarousel products={productItems.data} />
          <ProductInfo productId={id} discount={discount} />
        </div>
      </>
    );
}
export default ProductDetails;