import { ProductCarousel } from '@/widgets/product-carousel';
import { ProductImages } from '@/widgets/product-images';
import { ProductInfo } from '@/widgets/product-info';
import React from 'react';

function ProductDetails() {
  return (
    <div className='flex mx-10 mt-8 flex-row gap-12'>
      <ProductImages/>
      <ProductCarousel/>
      <ProductInfo/>
    </div>
  );
}
export default ProductDetails;