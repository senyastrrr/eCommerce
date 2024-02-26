import { useBillboards } from '@/entites/banner/api/queries';
import { CustomCarousel, AutoplayPlugin } from '@/shared/common/carousel';
import { Card, CardContent } from '@/shared/ui/card';
import { CarouselItem } from '@/shared/ui/carousel';
import Autoplay from "embla-carousel-autoplay"
import React from 'react';

const asset = (path) => `/storage/images/${path}`;

export function BannersCarousel() {

    const bannersQueries = useBillboards();
    const plugin = React.useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
    
    if (bannersQueries.isLoading) {
        return <div>Loading...</div>;
    }
    if (bannersQueries.isError) {
        return <div>Error...</div>;
    }

    if (bannersQueries.isSuccess) {
        return (
            <CustomCarousel
                className="flex w-screen"
                isButtonsVisible={false}
                isLooped={true}
                plugin={plugin}
            >
                {bannersQueries.data.map((banner) => (
                    banner.isActual ? (
                        <CarouselItem key={banner?.id} className="p-0">
                            <Card className="border-0 p-0">
                                <CardContent className="p-0">
                                    <img src={asset(banner.image)} alt={banner.image} />
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ) : null
                ))}

            </CustomCarousel>
        );
    }
}