"use client"

import { useState } from "react"
import Image from "next/image"
import { MessageCircle } from "lucide-react"

interface Review {
  id: number
  author: string
  rating: number
  date: string
  comment: string
}

interface RatingBreakdown {
  stars: number
  percentage: number
  count: number
}

interface RatingReviewsProps {
  averageRating: number
  totalReviews: number
  breakdown: RatingBreakdown[]
  reviews: Review[]
}

export default function RatingReviews({
  averageRating,
  totalReviews,
  breakdown,
  reviews,
}: RatingReviewsProps) {
  const [visibleReviews, setVisibleReviews] = useState(4)

  const showMore = () => {
    setVisibleReviews(prev => prev + 4)
  }

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Image
            key={star}
            src="/assets/icons/star-filled.svg"
            alt=""
            width={16}
            height={16}
            className={star <= rating ? "opacity-100" : "opacity-30"}
          />
        ))}
      </div>
    )
  }

  return (
    <section className="w-full">
      {/* Header */}
      <div className="flex flex-col gap-1 mb-6 lg:mb-10">
        <h2 className="text-lg lg:text-2xl font-semibold">Rating & Reviews</h2>
        <div className="w-10 lg:w-12 h-1 bg-[#be968e] rounded-full" />
      </div>

      {/* Rating Summary */}
      <div className="grid lg:grid-cols-[auto_1fr_auto] gap-6 lg:gap-12 items-start mb-6 lg:mb-10">
        {/* Average Rating */}
        <div className="flex flex-col items-center lg:items-start">
          <div className="flex items-baseline">
            <span className="text-[70px] lg:text-[100px] font-medium leading-none">{averageRating}</span>
            <span className="text-xl lg:text-2xl text-[#b0b0b0] font-medium ml-2">/5</span>
          </div>
        </div>

        {/* Rating Breakdown */}
        <div className="flex flex-col gap-4 lg:gap-4 w-full">
          {breakdown.map((item) => (
            <div key={item.stars} className="flex items-center gap-2 lg:gap-2">
              <div className="flex items-center gap-1">
                <Image src="/assets/icons/star-filled.svg" alt="" width={20} height={20} />
                <span className="text-base lg:text-xl font-medium text-[#545454] min-w-[13px]">{item.stars}</span>
              </div>
              <div className="flex-1 h-1.5 bg-[#f5f5f5] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#be968e] rounded-full transition-all"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
              <span className="text-base lg:text-xl font-medium text-[#545454] min-w-[40px]">%{item.percentage}</span>
            </div>
          ))}
        </div>

        {/* Total Reviews & Add Comment */}
        <div className="flex flex-col gap-3 lg:gap-4 items-center lg:items-end">
          <div className="text-center lg:text-right">
            <p className="text-sm lg:text-base text-[#545454]">Total Reviews</p>
            <p className="text-2xl lg:text-[48px] font-semibold leading-tight">{totalReviews.toFixed(1)}K</p>
          </div>
          <button className="bg-[#be968e] text-white px-5 py-2.5 lg:px-7 lg:py-3.5 rounded-xl flex items-center gap-2 hover:bg-[#a87e77] transition-colors">
            <span className="text-sm lg:text-base font-semibold">Add Comment</span>
            <Image src="/assets/icons/chat.svg" alt="" width={18} height={16} className="brightness-0 invert" />
          </button>
        </div>
      </div>

      {/* Reviews List */}
      <div className="flex flex-col gap-6 lg:gap-8 !mt-5">
        {reviews.slice(0, visibleReviews).map((review) => (
          <div key={review.id} className="flex flex-col gap-4 lg:gap-6">
            <div className="flex flex-col gap-3 lg:gap-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-2 lg:gap-3">
                  <h3 className="text-sm lg:text-lg font-semibold">{review.author}</h3>
                  {renderStars(review.rating)}
                </div>
                <span className="text-xs lg:text-sm text-[#545454] whitespace-nowrap">{review.date}</span>
              </div>
              <p className="text-sm lg:text-base text-[#545454] leading-relaxed">{review.comment}</p>
            </div>
            <div className="h-px bg-[#f4f7f9]" />
          </div>
        ))}
      </div>

      {/* View More Button */}
      {visibleReviews < reviews.length && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={showMore}
            className="px-6 py-2.5 text-[#be968e] text-sm lg:text-base font-semibold hover:bg-[#be968e]/5 rounded-lg transition-colors"
          >
            View More Comments
          </button>
        </div>
      )}
    </section>
  )
}
