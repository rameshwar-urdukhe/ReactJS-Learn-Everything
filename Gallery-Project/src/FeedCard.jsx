import React from "react";

const FeedCard = (props) => {
  return (
    /* - w-full: 1 per row on mobile
       - sm:w-[48%]: 2 per row on small screens/tablets
       - lg:w-[23%]: Roughly 4 per row on large screens (accounting for gaps)
    */
    <div className="w-full sm:w-[48%] lg:w-[23.5%]  overflow-hidden bg-white border border-gray-200 rounded-2xl shadow-sm transition-all hover:shadow-md">
      {/* Image Container */}
      <div className="relative aspect-square w-full bg-gray-100">
        <a href={props.url}>
          <img
            src={props.image}
            alt={props.author}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </a>
      </div>

      {/* Content Area */}
      <div className="flex items-center gap-3 p-4">
        <div className="flex flex-col">
          <p className="text-sm font-semibold text-gray-900 leading-tight">
            {props.author}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
