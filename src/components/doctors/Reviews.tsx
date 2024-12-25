import React from "react";
interface ReviewProps {
  img: string;
  name: string;
  review: string;
  rating: number;
  date: string;
  problemOfConsulation: string;
}

const reviewList: ReviewProps[] = [
  {
    img: "/img/profiles/alicent.jpg",
    name: "Dr. Priya Sharma",
    review:
      "Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods",
    rating: 4.5,
    date: "12th May 2021",
    problemOfConsulation: "Consulted for Skin Care",
  },
  {
    img: "/img/profiles/alicent.jpg",
    name: "Dr. Raj Patel",
    review:
      "Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods",
    rating: 4.7,
    date: "12th May 2021",
    problemOfConsulation: "Consulted for Pregnancy",
  },
  {
    img: "/img/profiles/alicent.jpg",
    name: "Dr. Anjali Mehta",
    review:
      "Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods",
    rating: 4.3,
    date: "12th May 2021",
    problemOfConsulation: "Consulted for Hair Care",
  },
];

const ReviewItem: React.FC<{ review: ReviewProps }> = ({ review }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md">
      <div className="flex justify-between items-center gap-4">
        <div className="flex items-center gap-4 text-gray-400">
          <img
            className="border-2 border-gray-200 rounded-full w-16 h-16"
            src={review.img}
            alt={review.name}
          />
          <div>
            <h3 className="font-semibold text-blue-950 text-lg">
              {review.name}
            </h3>
            <p className="font-medium text-gray-500">
              {review.problemOfConsulation}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-gray-500">{review.date}</p>
        </div>
      </div>
      <div>
        <p className="text-gray-500">
          {[1, 2, 3, 4, 5].map((rating) => (
            <span key={rating} className="text-xl text-yellow-400">
              ★
            </span>
          ))}
        </p>
        <p className="text-justify text-lg">{review.review}</p>
      </div>
    </div>
  );
};

const Reviews: React.FC = () => {
  return (
    <div className="space-y-4 border-2 border-gray-200 rounded-xl w-[600px] overflow-hidden">
      <div className="bg-gray-100 px-4 py-3 text-xl">
        <h2>Featured Reviews(102)</h2>
      </div>
      <div className="space-y-4 px-4">
        {reviewList.map((review, index) => (
          <ReviewItem key={index} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
