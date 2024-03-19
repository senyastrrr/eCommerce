import React from 'react';
import { CustomCarousel } from '@/shared/common/carousel';
import { CardContent } from '@/shared/ui/card';
import { CarouselItem } from '@/shared/ui/carousel';
import { Card } from '@material-tailwind/react';
import { asset } from '@/shared/lib/storage-path';

export function ProductCarousel({ products }) {
  return (
    <CustomCarousel
      className="flex w-1/3 min-w-80"
      isButtonsVisible={true}
      isLooped={true}
    >
      {products.map((product, index) => (
        <CarouselItem key={index} className="p-0">
          <Card className="border-0 p-0">
            <CardContent className="p-0">
              <img src={asset(product.image)} alt={product.SKU} className='rounded-lg' />
            </CardContent>
          </Card>
        </CarouselItem>
      ))}
    </CustomCarousel>
  );
}