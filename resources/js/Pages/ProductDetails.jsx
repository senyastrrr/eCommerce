import { CustomCarousel } from '@/shared/common/carousel';
import { Price } from '@/shared/common/price';
import { StarRating } from '@/shared/common/rating';
import { CommonSelect } from '@/shared/common/select';
import { Button } from '@/shared/ui/button';
import { CardContent } from '@/shared/ui/card';
import { CarouselItem } from '@/shared/ui/carousel';
import { Label } from '@/shared/ui/label';
import { Card } from '@material-tailwind/react';
import React from 'react';

const asset = (path) => `/storage/images/${path}`;

function ProductDetails() {
  return (
    <div className='flex mx-10 mt-8 flex-row gap-12'>
      <div className="flex flex-col flex-wrap gap-12 hidden md:flex">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} style={{ width: 100, height: 100 }}>
            <img src={asset(`product-0${index + 1}.jpg`)} alt={`image-${index}`} />
          </div>
        ))}
      </div>
      <CustomCarousel
        className="flex w-1/3"
        isButtonsVisible={true}
        isLooped={true}
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <CarouselItem key={index} className="p-0">
            <Card className="border-0 p-0">
              <CardContent className="p-0">
                <img src={asset(`product-0${index + 1}.jpg`)} alt="" />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CustomCarousel>
      <div className="flex flex-wrap w-1/3 flex-col gap-8">
        <StarRating />
        <Label htmlFor="none" className="text-lg font-semibold">{"T-shirt"}</Label>
        <Price price={2550} discount={10} />
        <CommonSelect placeholder={"Выберите размер"} items={["S", "M", "L", "XL"]} />
        <CommonSelect placeholder={"Выберите цвет"} items={["Белый", "Бордовый", "Оранжевый", "Салатовый"]} />
        <Button>Add to cart</Button>
      </div>
    </div>
  );
}
export default ProductDetails;