import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Maximize2 } from 'lucide-react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Actions from "./Actions";
const asset = (path) => `/storage/images/${path}`;

export default function ImagesCarousel() {

    return (
        <div className="flex flex-wrap w-1/3">
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full">
                
                <CarouselContent>
                    {Array.from({ length: 4 }).map((_, index) => (
                        <CarouselItem key={index} className="p-0">
                            <Card className="border-0 p-0">
                                <CardContent className="p-0">
                                    <img src={asset(`product-0${index + 1}.jpg`)} alt="" />
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute top-1/2 transform -translate-y-1/2 left-4 z-10" />
                <CarouselNext className="absolute top-1/2 transform -translate-y-1/2 right-4 z-10" />
            </Carousel>
        </div>
    )
}
