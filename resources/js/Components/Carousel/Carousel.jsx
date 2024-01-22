import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
const asset = (path) => `/storage/images/${path}`;

export default function CarouselDemo() {
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
                <img src={asset(`slide-0${index+1}.jpg`)} alt="" />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      
      {/* <CarouselPrevious/>
      <CarouselNext /> */}
    </Carousel>
  )
}
