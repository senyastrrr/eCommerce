import { useBillboards } from '@/entites/billboard';
import { CustomCarousel } from '@/shared/common/carousel';
import { asset } from '@/shared/lib/storage-path';
import { Card, CardContent } from '@/shared/ui/card';
import { CarouselItem } from '@/shared/ui/carousel';
import Autoplay from "embla-carousel-autoplay"
import React from 'react';

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
                        <CarouselItem key={billboard?.id} className="p-0 relative">
                            <Card className="border-0 p-0 relative">
                                <CardContent className="p-0 relative">
                                    <img src={asset(billboard.image)} alt={billboard.image} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 right-1/3 bottom-1/2 flex items-center justify-center">
                                        <span className="text-black font-bold text-sm md:text-lg lg:text-xl">{billboard.content}</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ) : null
                ))}
            </CustomCarousel>
        );
    }
}
