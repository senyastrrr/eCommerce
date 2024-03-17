import React from 'react';
import { CustomCarousel } from '@/shared/common/carousel';
import { CardContent } from '@/shared/ui/card';
import { CarouselItem } from '@/shared/ui/carousel';
import { Card } from '@material-tailwind/react';

const asset = (path) => `/storage/images/${path}`;

export function ProductCarousel() {
    return (
        <CustomCarousel
        className="flex w-1/3 min-w-80"
        isButtonsVisible={true}
        isLooped={true}
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <CarouselItem key={index} className="p-0">
            <Card className="border-0 p-0">
              <CardContent className="p-0">
                <img src={asset(`product-0${index + 1}.jpg`)} alt="" className='rounded-lg'/>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CustomCarousel>
    );
}