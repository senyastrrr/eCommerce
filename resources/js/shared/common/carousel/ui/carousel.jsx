import * as React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselNext,
    CarouselPrevious,
} from "@/shared/ui/carousel"

export function CustomCarousel({ isButtonsVisible, isLooped, plugin, className, children }) {

    return (
        <div className={className}>
            <Carousel
                opts={{
                    align: "start",
                    loop: { isLooped },
                }}
                plugins={plugin ? [plugin.current] : []}
                className="w-full">

                <CarouselContent>
                    { children }
                </CarouselContent>
                {isButtonsVisible && (
                    <>
                        <CarouselPrevious className="absolute top-1/2 transform -translate-y-1/2 left-4 z-10" />
                        <CarouselNext className="absolute top-1/2 transform -translate-y-1/2 right-4 z-10" />
                    </>
                )}
            </Carousel>
        </div>
    )
}
