import React from 'react';
import { Card, CardContent } from "@/components/shared/ui/card/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/shared/ui/carousel/carousel"
import CategoryBox from './Category';

const categories = [
    { title: 'Women', description: 'Spring 2018', image: 'banner-04.jpg' },
    { title: 'Men', description: 'Spring 2018', image: 'banner-02.jpg' },
    { title: 'Accessories', description: 'New Trend', image: 'banner-03.jpg' },
    { title: 'New Trend', description: 'Women Spring 2018', image: 'banner-06.jpg' },
    // Add more categories as needed
];
const asset = (path) => `/storage/images/${path}`;
const CategoriesCarousel = () => {
    return (
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            className="w-full h-full p-2"
        >
            <CarouselContent>
                {categories.map((category, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <Card className="h-full">
                            <CardContent className="h-full p-4">
                                <CategoryBox title={category.title} description={category.description} image={asset(category.image)}/>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>

            <CarouselPrevious className="absolute top-1/2 transform -translate-y-1/2 left-4 z-10" />
            <CarouselNext className="absolute top-1/2 transform -translate-y-1/2 right-4 z-10" />
        </Carousel>
    );
};

export default CategoriesCarousel;