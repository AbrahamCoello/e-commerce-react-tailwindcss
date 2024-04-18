import { XMarkIcon } from '@heroicons/react/24/solid';
import { numberFormat } from '../../utils';

/* eslint-disable react/prop-types */
function OrderCard({ item, onDelete }) {
  const { title, image, category, price } = item;

  return (
    <div className="flex justify-between items-center border border-black/20 rounded-lg">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20 p-1">
          <img
            className="object-cover w-full h-full rounded-lg"
            src={image}
            alt={title}
          />
        </figure>
        <div className="flex flex-col">
          <p className="text-sm font-medium">{title}</p>
          <span className="text-sm font-light">{category}</span>
        </div>
      </div>
      <div className="flex items-center gap-2 px-1">
        <span className="text-lg font-medium">{numberFormat(price)}</span>
        {onDelete && (
          <span
            onClick={onDelete}
            className="flex items-center justify-center rounded-full bg-black/40 w-6 h-6 cursor-pointer"
          >
            <XMarkIcon className="h-4 w-4 text-white" />
          </span>
        )}
      </div>
    </div>
  );
}

export default OrderCard;
