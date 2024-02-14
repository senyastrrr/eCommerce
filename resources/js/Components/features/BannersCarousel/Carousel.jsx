import * as React from "react"

import { Card, CardContent } from "@/components/shared/ui/card/card"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/shared/ui/carousel/carousel"
const asset = (path) => `/storage/images/${path}`;

export default function BannersCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  )

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[plugin.current]}
      className="w-full"
    >
      <CarouselContent>
        {Array.from({ length: 4 }).map((_, index) => (
          <CarouselItem key={index} className="p-0">
            <Card className="border-0 p-0">
              <CardContent className="p-0">
                <img src={asset(`slide-0${index + 1}.jpg`)} alt="" />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* <CarouselPrevious className="absolute top-1/2 transform -translate-y-1/2 left-4 z-10" />
      <CarouselNext className="absolute top-1/2 transform -translate-y-1/2 right-4 z-10" /> */}
    </Carousel>
  )
}
