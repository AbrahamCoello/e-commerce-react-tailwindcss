import { PlusIcon } from '@heroicons/react/24/solid';

/* eslint-disable react/prop-types */
function Card({ item, onClick, onAddToCart }) {
  const { title, image, category, price } = item;

  return (
    <div
      className="rounded-lg cursor-pointer w-64 bg-gray-800/10 hover:bg-gray-800/95 transition"
      onClick={onClick}
      role="presentation"
    >
      <figure className="relative w-full h-4/5">
        <img
          className="object-cover w-full h-full rounded-t-lg"
          src={image}
          alt={title}
        />
        <span className="absolute bottom-1 right-1 py-0.5 px-1 text-md bg-white/50 text-black/60 rounded-lg font-medium">
          {category}
        </span>
      </figure>
      <div className="p-1">
        <p className="flex justify-between ">
          <span className="text-lg font-medium">${price}</span>
          {onAddToCart && (
            <span
              onClick={onAddToCart}
              className="flex items-center justify-center rounded-full bg-black/40 w-8 h-8"
            >
              <PlusIcon className="h-5 w-5 text-white" />
            </span>
          )}
        </p>
        <h3 className="text-lg font-light truncate">{title}</h3>
      </div>
    </div>
  );
}

export default Card;
