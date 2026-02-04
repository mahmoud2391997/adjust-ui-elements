"use client"

import { useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, ShoppingBag, Heart } from "lucide-react"

interface Product {
  id: number
  name: string
  category: string
  price: number
  originalPrice?: number
  discount?: number
  rating: number
  reviewCount: number
  image: string
  colors: string[]
  isNew?: boolean
  isFavorite?: boolean
}

interface SimilarItemsProps {
  products: Product[]
}

export default function SimilarItems({ products }: SimilarItemsProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 1024px)": { slidesToScroll: 2 },
    },
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section className="w-full">
      {/* Header */}
      <div className="flex flex-col gap-1 mb-5 lg:mb-7">
        <h2 className="text-lg lg:text-2xl font-semibold">Similar Items</h2>
        <div className="w-10 lg:w-12 h-1 bg-[#be968e] rounded-full" />
      </div>

      {/* Carousel Container */}
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-3 lg:gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-[0_0_260px] lg:flex-[0_0_280px] min-w-0"
              >
                <Link href={`/product/${product.id}`} className="group block">
                  <div className="flex flex-col gap-3 lg:gap-3">
                    {/* Product Image */}
                    <div className="relative aspect-square rounded-[20px] overflow-hidden border border-black/5 bg-white">
                      {/* Badges */}
                      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
                        {product.discount && (
                          <span className="bg-[#be968e] text-white text-[10px] font-semibold px-3 py-1.5 rounded">
                            {product.discount}% OFF
                          </span>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="absolute top-3 right-3 z-10 flex gap-2">
                        {product.isNew && (
                          <button className="p-2 bg-white rounded-lg shadow-sm hover:bg-[#f5f5f5] transition-colors">
                            <ShoppingBag className="w-4 h-4 stroke-green-600" />
                          </button>
                        )}
                        <button className="p-2 bg-white rounded-lg shadow-sm hover:bg-[#f5f5f5] transition-colors">
                          <Heart
                            className={`w-4 h-4 ${
                              product.isFavorite
                                ? "fill-green-600 stroke-green-600"
                                : "stroke-[#020202]"
                            }`}
                          />
                        </button>
                      </div>

                      {/* Product Image */}
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col gap-2 lg:gap-2">
                      {/* Category & Rating */}
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs lg:text-xs font-medium text-[#545454]">
                          {product.category}
                        </span>
                        <div className="flex items-center gap-1">
                          <Image src="/assets/icons/star-filled.svg" alt="" width={13} height={13} />
                          <span className="text-xs font-medium text-[#545454]">{product.rating}</span>
                          <span className="text-[10px] text-[#545454]">({product.reviewCount})</span>
                        </div>
                      </div>

                      {/* Product Name */}
                      <h3 className="text-xs font-medium text-[#545454] line-clamp-2 leading-relaxed min-h-[2.5rem]">
                        {product.name}
                      </h3>

                      {/* Price & Colors */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="text-sm lg:text-base font-medium">AED {product.price}</span>
                          {product.originalPrice && (
                            <span className="text-xs text-[#8a8a8a] line-through">
                              AED {product.originalPrice}
                            </span>
                          )}
                        </div>
                        {product.colors && product.colors.length > 0 && (
                          <div className="flex items-center gap-1">
                            <Image src="/assets/icons/color-swatches.svg" alt="" width={68} height={20} />
                            {product.colors.length > 2 && (
                              <span className="text-sm font-medium">+{product.colors.length - 2}</span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-3 !mt-5 lg:!mt-6">
          <button
            onClick={scrollPrev}
            className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#f5f5f5] hover:bg-[#e5e5e5] flex items-center justify-center transition-colors"
            aria-label="Previous products"
          >
            <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 stroke-[#020202]" />
          </button>
          <button
            onClick={scrollNext}
            className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#be968e] hover:bg-[#a87e77] flex items-center justify-center transition-colors"
            aria-label="Next products"
          >
            <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 stroke-white" />
          </button>
        </div>
      </div>
    </section>
  )
}
