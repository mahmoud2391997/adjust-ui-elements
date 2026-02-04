"use client"

import { useState, useCallback, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ProductImage {
  src: string
  alt: string
}

interface ProductCarouselProps {
  images: ProductImage[]
}

export default function ProductCarousel({ images }: ProductCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <div className="relative w-full">
      {/* Main Carousel */}
      <div className="relative rounded-[20px] lg:rounded-[32px] bg-[#f5f5f5] overflow-hidden">
        {/* Progress Indicators - Mobile only */}
        <div className="absolute top-3 left-0 right-0 flex justify-center gap-2 z-10 px-4 lg:hidden">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-1 flex-1 max-w-[120px] rounded-full transition-colors ${
                index === selectedIndex ? "bg-white" : "bg-[#d4d4d4]"
              }`}
            />
          ))}
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {images.map((image, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0">
                <div className="relative aspect-square lg:aspect-[524/565]">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={scrollPrev}
          className="absolute left-3 lg:left-6 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/85 hover:bg-white flex items-center justify-center transition-all shadow-md"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 stroke-[#be968e] stroke-2" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-3 lg:right-6 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/85 hover:bg-white flex items-center justify-center transition-all shadow-md"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 stroke-[#be968e] stroke-2" />
        </button>
      </div>

      {/* Thumbnail Grid */}
      <div className="!mt-4 lg:!mt-6 flex gap-2 lg:gap-4">
        {images.slice(0, 3).map((image, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`relative flex-1 aspect-square rounded-lg lg:rounded-xl overflow-hidden border-2 transition-all ${
              index === selectedIndex ? "border-[#be968e]" : "border-[#e6e6e6]"
            }`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover"
            />
          </button>
        ))}
        {images.length > 3 && (
          <div className="relative flex-1 aspect-square rounded-lg lg:rounded-xl overflow-hidden bg-[#020202] flex items-center justify-center border-2 border-[#e6e6e6]">
            <span className="text-white text-sm lg:text-lg font-semibold">+{images.length - 3}</span>
          </div>
        )}
      </div>
    </div>
  )
}
