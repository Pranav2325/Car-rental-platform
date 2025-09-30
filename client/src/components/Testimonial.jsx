import React from "react";
import Title from "./Title";

const testimonials = [
  {
    name: "Alexander Wright",
    role: "Entrepreneur",
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=200",
    review:
      "The luxury SUV I rented was spotless and delivered on time right to my hotel. The entire experience felt premium and seamless. Worth every penny.",
    rating: 5,
  },
  {
    name: "Isabella Rossi",
    role: "Travel Influencer",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=200",
    review:
      "Driving a convertible along the coast was a dream. The car looked brand new, and the booking process was effortless. I’ll be recommending this service to my followers.",
    rating: 5,
  },
  {
    name: "Daniel Carter",
    role: "Corporate Executive",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200",
    review:
      "I often rent cars for business trips, but this was on another level. Professional staff, excellent car selection, and an unmatched luxury feel.",
    rating: 5,
  },
  {
    name: "Priya Nair",
    role: "Destination Wedding Planner",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=200",
    review:
      "We booked a luxury sedan for a wedding, and it made the event unforgettable. Elegant, reliable, and delivered with a personal touch.",
    rating: 4,
  },
];


const StarIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 22 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z"
      fill="#0558FE"
    />
  </svg>
);

const Testimonial = () => {
  return (
    <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">
      <div>
        <Title
          title="Customer Testimonials"
          subTitle="Hear what our users say about us."
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
        {testimonials.map(({ name, role, image, review, rating }, index) => (
          <div
            key={index}
            className="text-sm w-80 border border-gray-200 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5"
          >
            <div className="flex flex-col items-center px-5 py-4 relative">
              <img
                className="h-24 w-24 absolute -top-14 rounded-full"
                src={image}
                alt={name}
              />
              <div className="pt-8 text-center">
                <h1 className="text-lg font-medium text-gray-800">{name}</h1>
                <p className="text-gray-800/80">{role}</p>
              </div>
            </div>
            <p className="text-gray-500 px-6 text-center">{review}</p>
            <div className="flex justify-center pt-4">
              <div className="flex gap-0.5">
                {Array.from({ length: rating }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
