import { CustomCarousel, AutoplayPlugin } from '@/shared/common/carousel';
import { Card, CardContent } from '@/shared/ui/card';
import { CarouselItem } from '@/shared/ui/carousel';
import React from 'react';

const asset = (path) => `/storage/images/${path}`;

export function BannersCarousel() {
    return (
        <CustomCarousel
            className="flex w-screen"
            isButtonsVisible={false}
            isLooped={true}
            plugin={AutoplayPlugin(5000, false)}
        >
            {Array.from({ length: 4 }).map((_, index) => (
                <CarouselItem key={index} className="p-0">
                    <Card className="border-0 p-0">
                        <CardContent className="p-0">
                            <img src={asset(`slide-0${index + 1}.jpg`)} alt="" />
                        </CardContent>
                    </Card>
                </CarouselItem>
            ))}
        </CustomCarousel>
    );
}
