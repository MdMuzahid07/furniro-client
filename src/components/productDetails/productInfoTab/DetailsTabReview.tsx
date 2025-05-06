import XIcon from "@/components/icons/XIcon";
import Image from "next/image";
import React, { useState } from "react";

const fakeReview = [
  {
    id: 1,
    name: "John",
    avatar: "/images/details-page-image-sofa.png",
    date: "May 15, 2023",
    rating: 5,
    title: "Absolutely love it!",
    content:
      "This product exceeded all my expectations. The quality is outstanding and it looks even better in person than in the photos.",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c",
    ],
  },
  {
    id: 2,
    name: "John",
    avatar: "/images/details-page-image-sofa.png",

    date: "April 28, 2023",
    rating: 4,
    title: "Great product with minor issues",
    content:
      "Overall very happy with my purchase. The only reason I'm not giving 5 stars is that the assembly instructions could be clearer.",
    images: ["https://images.unsplash.com/photo-1586023492125-27b2c045efd7"],
  },
];

const DetailsTabReview = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [reviews, setReviews] = useState(fakeReview);

  const [activeImage, setActiveImage] = useState<string | null>(null);

  // calculate rating distribution
  const ratingDistribution = [5, 4, 3, 2, 1].map((star) => ({
    stars: star,
    count: reviews.filter((r) => r.rating === star).length,
    percentage: (reviews.filter((r) => r.rating === star).length / reviews.length) * 100,
  }));

  // calculate average rating
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  const openImageModal = (imageUrl: string): void => {
    setActiveImage(imageUrl);
  };

  const closeImageModal = () => {
    setActiveImage(null);
  };

  return (
    <section className="md:-px-[60px] px-[20px] sm:px-[40px] lg:px-[80px] xl:px-[207px]">
      {/* header with overall rating */}
      <div className="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row">
        <h2 className="text-2xl font-bold text-dark/80">Customer Reviews</h2>
        <div className="flex flex-col items-center md:items-end">
          <div className="flex items-center">
            <span className="mr-2 text-4xl font-bold text-dark">{averageRating.toFixed(1)}</span>
            <span className="text-info">/ 5</span>
          </div>
          <div className="relative text-2xl text-accent-light">
            ★★★★★
            <div
              className="absolute top-0 left-0 overflow-hidden"
              style={{ width: `${(averageRating / 5) * 100}%` }}
            >
              <span className="text-primary">★★★★★</span>
            </div>
          </div>
          <p className="mt-1 text-info">
            Based on {reviews.length} review{reviews.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      {/* rating distribution bars */}
      <div className="mb-8 space-y-2">
        {ratingDistribution.map(({ stars, count, percentage }) => (
          <div className="flex items-center" key={stars}>
            <span className="w-8 text-info">{stars} ★</span>
            <div className="mx-2 h-4 flex-1 overflow-hidden rounded-full bg-quaternary">
              <div className="h-full bg-primary" style={{ width: `${percentage}%` }}></div>
            </div>
            <span className="w-8 text-right text-accent">{count}</span>
          </div>
        ))}
      </div>

      {/* review cards */}
      <div className="space-y-6">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div className="border-t border-accent-light pt-6" key={review.id}>
              <div className="mb-3 flex items-start">
                <Image
                  src={review.avatar}
                  alt={review.name}
                  className="mr-4 h-12 w-12 rounded-full object-cover"
                  width={200}
                  height={200}
                />
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="font-medium text-dark">{review.name}</h3>
                    <span className="text-sm text-accent">{review.date}</span>
                  </div>
                  <div className="text-lg text-primary">
                    {"★".repeat(review.rating)}
                    {"☆".repeat(5 - review.rating)}
                  </div>
                </div>
              </div>
              <h4 className="mb-2 text-lg font-medium">{review.title}</h4>
              <p className="mb-4 text-info">{review.content}</p>
              {review?.images?.length > 0 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {review.images.map((image, idx) => (
                    <Image
                      key={idx}
                      src={image}
                      alt={`Review ${idx + 1}`}
                      className="h-24 w-24 cursor-pointer rounded-[10px] object-cover transition-opacity hover:opacity-90"
                      onClick={() => openImageModal(image)}
                      width={200}
                      height={200}
                    />
                  ))}
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="py-12 text-center text-accent">
            <p className="text-lg">No reviews yet</p>
            <p className="mt-2">Be the first to review this product!</p>
          </div>
        )}
      </div>

      {/* image modal */}
      {activeImage && (
        <div
          className="bg-opacity-75 fixed inset-0 z-50 flex items-center justify-center bg-dark p-4"
          onClick={closeImageModal}
        >
          <div className="relative max-h-screen max-w-4xl">
            <button
              className="absolute -top-10 -right-[7px] cursor-pointer text-background"
              onClick={closeImageModal}
            >
              <XIcon />
            </button>
            <Image
              src={activeImage}
              alt="Enlarged review"
              className="max-h-[90vh] max-w-full object-contain"
              width={400}
              height={700}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default DetailsTabReview;
