"use client"

import { useState } from "react"
import Image from "next/image"
import { ShoppingBag, Heart, Plus, Minus, ChevronDown } from "lucide-react"

interface Color {
  name: string
  value: string
}

interface ProductInfoProps {
  name: string
  price: number
  originalPrice: number
  category: string
  description: string
  colors: Color[]
  sizes: string[]
  types: string[]
}

export default function ProductInfo({
  name,
  price,
  originalPrice,
  category,
  description,
  colors,
  sizes,
  types,
}: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState(colors[1])
  const [selectedSize, setSelectedSize] = useState(sizes[1])
  const [selectedType, setSelectedType] = useState(types[0])

  const increment = () => setQuantity(q => q + 1)
  const decrement = () => setQuantity(q => Math.max(1, q - 1))

  return (
    <div className="flex flex-col gap-3 lg:gap-5">
      {/* Category Badge */}
      <div className="inline-flex">
        <span className="px-4 py-2 rounded-full border border-[#be968e] text-[#be968e] text-sm font-semibold">
          {category}
        </span>
      </div>

      {/* Actions - Mobile */}
      <div className="flex gap-2 lg:hidden">
        <button className="p-3 border border-[#be968e]/20 rounded-xl hover:bg-[#be968e]/5 transition-colors">
          <Image src="/assets/icons/bag-add.svg" alt="Add to bag" width={24} height={24} />
        </button>
        <button className="p-3 border border-[#be968e]/20 rounded-xl hover:bg-[#be968e]/5 transition-colors">
          <Image src="/assets/icons/heart.svg" alt="Add to wishlist" width={24} height={24} />
        </button>
      </div>

      {/* Actions - Desktop */}
      <div className="hidden lg:flex gap-2">
        <button className="p-3 border border-[#be968e]/20 rounded-xl hover:bg-[#be968e]/5 transition-colors">
          <Image src="/assets/icons/bag-add.svg" alt="Add to bag" width={28} height={28} />
        </button>
        <button className="p-3 border border-[#be968e]/20 rounded-xl hover:bg-[#be968e]/5 transition-colors">
          <Image src="/assets/icons/heart.svg" alt="Add to wishlist" width={24} height={24} />
        </button>
      </div>

      {/* Product Name */}
      <h1 className="text-xl lg:text-2xl font-medium leading-tight">{name}</h1>

      {/* Price */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="text-xl lg:text-[20px] font-medium">${price.toFixed(2)}</span>
          <span className="text-base lg:text-[16px] text-[#8a8a8a] line-through">${originalPrice.toFixed(2)}</span>
        </div>
        <p className="text-xs text-[#333333]">This price is exclusive of taxes.</p>
      </div>

      {/* Description */}
      <p className="text-sm lg:text-base text-[#020202] leading-relaxed">{description}</p>

      {/* Divider */}
      <div className="h-px bg-[#e6e6e6]" />

      {/* Type Selector */}
      <div className="flex flex-col gap-2">
        <label className="text-xs lg:text-sm">Type</label>
        <div className="relative">
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full px-4 py-3 lg:py-3.5 border border-black/15 rounded-[10px] text-xs lg:text-sm font-medium appearance-none bg-white cursor-pointer focus:outline-none focus:border-[#be968e]"
          >
            {types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-3 h-2 pointer-events-none" />
        </div>
      </div>

      {/* Size Selector */}
      <div className="flex flex-col gap-2">
        <label className="text-xs lg:text-sm">Size</label>
        <div className="relative">
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            className="w-full px-4 py-3 lg:py-3.5 border border-black/15 rounded-[10px] text-xs lg:text-sm font-medium appearance-none bg-white cursor-pointer focus:outline-none focus:border-[#be968e]"
          >
            {sizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-3 h-2 pointer-events-none" />
        </div>
      </div>

      {/* Colors */}
      <div className="flex flex-col gap-3 lg:gap-4">
        <h3 className="text-base lg:text-xl font-medium">Colors</h3>
        <div className="flex items-center gap-4">
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color)}
              className={`w-6 h-6 lg:w-8 lg:h-8 rounded-full transition-all ${
                selectedColor.name === color.name
                  ? "ring-2 ring-[#020202] ring-offset-2"
                  : "hover:scale-110"
              }`}
              style={{ backgroundColor: color.value }}
              aria-label={color.name}
            />
          ))}
        </div>
        <p className="text-sm lg:text-base text-[#545454]">{selectedColor.name}</p>
      </div>

      {/* Quantity */}
      <div className="flex flex-col gap-3 lg:gap-4">
        <div className="flex items-center gap-2">
          <h3 className="text-base lg:text-xl font-medium">Quantity</h3>
          <span className="text-xs lg:text-base text-[#8a8a8a]">(${price.toFixed(2)} for Piece)</span>
        </div>
        <div className="flex items-center gap-4 lg:gap-6">
          <div className="flex items-center gap-3 lg:gap-6 bg-[#f5f5f5] rounded-xl px-4 py-2.5 lg:px-5 lg:py-3">
            <button
              onClick={decrement}
              className="text-xl lg:text-2xl text-[#b0b0b0] font-medium hover:text-[#020202] transition-colors"
              aria-label="Decrease quantity"
            >
              -
            </button>
            <span className="text-lg lg:text-xl font-medium text-[#333333] min-w-[24px] text-center">
              {quantity.toString().padStart(2, "0")}
            </span>
            <button
              onClick={increment}
              className="w-4 h-4 hover:opacity-70 transition-opacity"
              aria-label="Increase quantity"
            >
              <Image src="/assets/icons/plus.svg" alt="" width={16} height={16} />
            </button>
          </div>
          <span className="text-lg lg:text-xl font-medium">${(price * quantity).toFixed(2)}</span>
        </div>
      </div>

      {/* Add to Cart Button */}
      <button className="w-full bg-[#be968e] text-white text-base lg:text-lg font-medium py-3.5 lg:py-4 rounded-xl lg:rounded-2xl hover:bg-[#a87e77] transition-colors flex items-center justify-center gap-2 mt-2">
        <span>Add To Cart</span>
        <Image src="/assets/icons/shopping-bag.svg" alt="" width={18} height={21} className="brightness-0 invert" />
      </button>
    </div>
  )
}
