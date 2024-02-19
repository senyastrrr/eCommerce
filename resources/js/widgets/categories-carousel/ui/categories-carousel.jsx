import { CustomCarousel, AutoplayPlugin } from '@/shared/common/carousel';
import { Card, CardContent } from '@/shared/ui/card';
import { CarouselItem } from '@/shared/ui/carousel';
import React from 'react';

const asset = (path) => `/storage/images/${path}`;

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
                    <Card className="h-full">
                        <CardContent className="h-full p-4">
                            <div className="bg-cover bg-center h-64" style={{ backgroundImage: `url(${asset(category.image)})` }}>
                                <div className="flex flex-col items-left justify-center p-8">
                                    <p className="text-2xl font-bold mb-2 text-gray-800">{category.title}</p>
                                    <p className="text-gray-500 mb-8">{category.description}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </CarouselItem>
            ))}
        </CustomCarousel>
    );
}
