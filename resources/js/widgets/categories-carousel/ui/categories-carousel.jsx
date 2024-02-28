import { CategoryCard } from '@/entites/category';
import { CustomCarousel } from '@/shared/common/carousel';
import { CarouselItem } from '@/shared/ui/carousel';
import React from 'react';

const categories = [
    { title: 'Women', description: 'Spring 2018', image: 'banner-04.jpg' },
    { title: 'Men', description: 'Spring 2018', image: 'banner-02.jpg' },
    { title: 'Accessories', description: 'New Trend', image: 'banner-03.jpg' },
    { title: 'New Trend', description: 'Women Spring 2018', image: 'banner-06.jpg' },
];


export function CategoriesCarousel() {
    return (
        <CustomCarousel
            className="w-full h-full p-2"
            isButtonsVisible={true}
            isLooped={true}
        >
            {categories.map((category, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <CategoryCard title={category.title} description={category.description} image={category.image}/>
                </CarouselItem>
            ))}
        </CustomCarousel>
    );
}
