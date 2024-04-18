import { XMarkIcon } from '@heroicons/react/24/solid';
import { useDispatch, useSelector } from 'react-redux';
import { setProductRedux } from '../../store/features/Product';

function ProductDetails() {
  const product = useSelector(({ product }) => product);
  const { isOpenDetails, details } = product ?? {};
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setProductRedux({ isOpenDetails: false }));
  };

  return (
    <aside
      className={`${
        isOpenDetails ? 'flex' : 'hidden'
      } flex-col fixed right-0 z-10 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)]`}
    >
      <div className="flex justify-between items-center px-2 py-1">
        <h2 className="text-lg font-semibold ">Product details</h2>
        <button
          onClick={handleClose}
          type="button"
          className="text-2xl text-black/80 font-semibold"
        >
          <XMarkIcon className="h-6 w-6 " />
        </button>
      </div>
      <figure className="flex p-4 justify-center items-center w-full h-[280px]">
        <img
          className="object-contain w-full h-full rounded-t-lg"
          src={details?.image}
          alt={details?.title}
        />
      </figure>
      <div className="p-2">
        <h3 className="text-lg font-light truncate">{details?.title}</h3>
        <p className="flex justify-between ">
          <span className="text-lg font-medium">${details?.price}</span>
        </p>
        <p>
          <span className="text-lg font-medium">Description:</span>{' '}
          {details?.description}
        </p>
      </div>
    </aside>
  );
}

export default ProductDetails;
