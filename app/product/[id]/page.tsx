import Header from "@/components/Header"
import Breadcrumb from "@/components/Breadcrumb"
import ProductCarousel from "@/components/ProductCarousel"
import ProductInfo from "@/components/ProductInfo"
import RatingReviews from "@/components/RatingReviews"
import SimilarItems from "@/components/SimilarItems"
import Footer from "@/components/Footer"

// Mock data - in a real app, this would come from an API
const productData = {
  id: 1,
  name: "J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With Blue",
  category: "T-Shirt",
  price: 300.00,
  originalPrice: 360.00,
  description: "Lorem ipsum dolor sit , consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, diam nonummy",
  images: [
    { src: "/assets/images/product-main.png", alt: "Blue hoodie main view" },
    { src: "/assets/images/product-variant-1.png", alt: "White hoodie variant" },
    { src: "/assets/images/product-variant-2.png", alt: "Red hoodie variant" },
    { src: "/assets/images/product-main.png", alt: "Black hoodie variant" },
  ],
  colors: [
    { name: "Red", value: "#d90202" },
    { name: "Blue", value: "#b8ccda" },
    { name: "Olive", value: "#988755" },
    { name: "Light Blue", value: "#7198c8" },
    { name: "Dark Green", value: "#5d5d5b" },
  ],
  sizes: ["S", "M", "L", "XL", "2XL"],
  types: ["Cotton", "Polyester", "Blend"],
}

const ratingData = {
  averageRating: 4.5,
  totalReviews: 3.0,
  breakdown: [
    { stars: 5, percentage: 67, count: 967 },
    { stars: 4, percentage: 15, count: 512 },
    { stars: 3, percentage: 6, count: 56 },
    { stars: 2, percentage: 3, count: 19 },
    { stars: 1, percentage: 9, count: 59 },
  ],
  reviews: [
    {
      id: 1,
      author: "Alex Daewn",
      rating: 4,
      date: "4 months ago",
      comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed",
    },
    {
      id: 2,
      author: "Alex Daewn",
      rating: 4,
      date: "4 months ago",
      comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed",
    },
    {
      id: 3,
      author: "Alex Daewn",
      rating: 4,
      date: "4 months ago",
      comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed",
    },
    {
      id: 4,
      author: "Alex Daewn",
      rating: 4,
      date: "4 months ago",
      comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed",
    },
    {
      id: 5,
      author: "Alex Daewn",
      rating: 4,
      date: "4 months ago",
      comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed",
    },
  ],
}

const similarProducts = [
  {
    id: 2,
    name: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..",
    category: "Dresses",
    price: 900,
    rating: 4.5,
    reviewCount: 2910,
    image: "/assets/images/related-product-1.png",
    colors: ["#be968e", "#020202"],
  },
  {
    id: 3,
    name: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..",
    category: "Dresses",
    price: 900,
    originalPrice: 1300,
    discount: 25,
    rating: 4.5,
    reviewCount: 2910,
    image: "/assets/images/related-product-1.png",
    colors: ["#be968e", "#020202"],
  },
  {
    id: 4,
    name: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..",
    category: "Dresses",
    price: 900,
    rating: 4.5,
    reviewCount: 2910,
    image: "/assets/images/related-product-1.png",
    colors: ["#be968e", "#020202"],
    isNew: true,
    isFavorite: true,
  },
  {
    id: 5,
    name: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..",
    category: "Dresses",
    price: 900,
    originalPrice: 1300,
    discount: 25,
    rating: 4.5,
    reviewCount: 2910,
    image: "/assets/images/related-product-2.png",
    colors: ["#be968e", "#020202"],
  },
  {
    id: 6,
    name: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..",
    category: "Dresses",
    price: 900,
    originalPrice: 1300,
    discount: 25,
    rating: 4.5,
    reviewCount: 2910,
    image: "/assets/images/related-product-2.png",
    colors: ["#be968e", "#020202"],
  },
]

export default function ProductDetailsPage() {
  return (
    <div className="relative min-h-screen bg-white flex flex-col overflow-hidden">
      {/* 3d-vertical-background-with-abstract-style 1 */}
      <div
        className="pointer-events-none absolute w-[354px] h-[1442px] right-0 top-0 -rotate-90 bg-[url('/assets/images/product-detail.jpg')] bg-cover bg-no-repeat opacity-70 hidden lg:block -z-10"
        aria-hidden="true"
      />

      <Header />

      {/* Hero Section with Background */}
      <div className="relative w-full bg-[#F5F5F5] py-6 lg:py-12">
        <div className="absolute left-0 top-0 w-[354px] h-[1442px] bg-red-500 transform -rotate-90 origin-top-left opacity-70" />
        <div className="relative w-full px-4 lg:px-8 xl:px-16 2xl:px-24">
          <h1 className="text-center text-2xl lg:text-[32px] font-semibold text-[#020202]">
            Product Details
          </h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="w-full bg-white p-5 sm:!p-10">
        <div className="w-full px-4 lg:px-8 xl:px-16 2xl:px-24 py-4 lg:py-6">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Our Category", href: "/category" },
              { label: "Product Details" },
            ]}
          />
        </div>
      </div>

      {/* Product Section */}
      <main className="w-full flex-1 bg-white p-5 sm:!p-10">
        <div className="w-full px-4 lg:px-8 xl:px-16 2xl:px-24 py-6 lg:py-12">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 mb-12 lg:mb-20 items-start">
            {/* Left: Product Images */}
            <div className="w-full p-5">
              <ProductCarousel images={productData.images} />
            </div>

            {/* Right: Product Info */}
            <div className="w-full">
              <ProductInfo
                name={productData.name}
                price={productData.price}
                originalPrice={productData.originalPrice}
                category={productData.category}
                description={productData.description}
                colors={productData.colors}
                sizes={productData.sizes}
                types={productData.types}
              />
            </div>
          </div>

          {/* Rating & Reviews */}
          <section className="mb-12 lg:mb-20">
            <RatingReviews
              averageRating={ratingData.averageRating}
              totalReviews={ratingData.totalReviews}
              breakdown={ratingData.breakdown}
              reviews={ratingData.reviews}
            />
          </section>

          {/* Similar Items */}
          <section className="mb-8 lg:mb-16 p-5">
            <SimilarItems products={similarProducts} />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
