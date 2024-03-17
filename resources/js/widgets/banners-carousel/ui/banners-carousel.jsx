import { useBillboards } from '@/entites/billboard';
import { CustomCarousel } from '@/shared/common/carousel';
import { Card, CardContent } from '@/shared/ui/card';
import { CarouselItem } from '@/shared/ui/carousel';
import Autoplay from "embla-carousel-autoplay"
import React from 'react';

const asset = (path) => `/storage/images/${path}`;

export function BannersCarousel() {

    const billboardsQueries = useBillboards();
    const plugin = React.useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

    if (billboardsQueries.isLoading) {
        return <div>Loading...</div>;
    }
    if (billboardsQueries.isError) {
        return <div>Error...</div>;
    }

    if (billboardsQueries.isSuccess) {
        return (
            <CustomCarousel
                className="flex w-screen"
                isButtonsVisible={false}
                isLooped={true}
                plugin={plugin}
            >
                {billboardsQueries.data.map((billboard) => (
                    billboard.isActual ? (
                        <CarouselItem key={billboard?.id} className="p-0">
                            <Card className="border-0 p-0">
                                <CardContent className="p-0">
                                    <img src={asset(billboard.image)} alt={billboard.image} />
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ) : null
                ))}

            </CustomCarousel>
        );
    }
}