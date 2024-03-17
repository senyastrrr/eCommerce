import { CategoryCard, useCategories } from '@/entites/category';
import { CustomCarousel } from '@/shared/common/carousel';
import { CarouselItem } from '@/shared/ui/carousel';
import React from 'react';

export function CategoriesCarousel() {

    const categories = useCategories();

    if (categories.isSuccess)
        return (
            <CustomCarousel
                className="w-full h-full p-2"
                isButtonsVisible={true}
                isLooped={true}
            >
                {categories.data.map((category, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <CategoryCard title={category.title} description={category.description} image={category.image} />
                    </CarouselItem>
                ))}
            </CustomCarousel>
        );
}
