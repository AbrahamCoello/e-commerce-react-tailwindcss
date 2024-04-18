import { XMarkIcon } from '@heroicons/react/24/solid';
import { useDispatch, useSelector } from 'react-redux';
import { unsetCheckoutSideMenuRedux } from '../../store/features/CheckoutSideMenu';
import OrderCard from '../OrderCard';
import { setShoppingCartRedux } from '../../store/features/ShoppingCart';
import { numberFormat, routes, totalPrice } from '../../utils';
import { setOrderRedux } from '../../store/features/Order';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function CheckoutSideMenu() {
  const checkoutSideMenu = useSelector(
    ({ checkoutSideMenu }) => checkoutSideMenu
  );
  const orderItems = useSelector(({ order }) => order.items);
  const shoppingCartItems = useSelector(
    ({ shoppingCart }) => shoppingCart.items
  );
  const { isOpenCheckout } = checkoutSideMenu;
  const dispatch = useDispatch();

  const handleClose = () => dispatch(unsetCheckoutSideMenuRedux());

  const handleCheckout = () => {
    const orderToAdd = {
      id: uuidv4(),
      date: new Date().toLocaleString(),
      products: shoppingCartItems,
      totalProducts: shoppingCartItems.length,
      total: totalPrice(shoppingCartItems),
    };
    dispatch(setShoppingCartRedux({ items: [] }));
    dispatch(setOrderRedux({ items: [...orderItems, orderToAdd] }));
    handleClose();
  };

  const handleDelete = (id) =>
    dispatch(
      setShoppingCartRedux({
        items: shoppingCartItems.filter((item) => item.id !== id),
      })
    );

  return (
    <aside
      className={`${
        isOpenCheckout ? 'flex' : 'hidden'
      } flex-col py-3 px-2 jus fixed right-0 z-10 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)]`}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Mi orden</h2>
        <button
          onClick={handleClose}
          type="button"
          className="text-2xl font-semibold text-black/80 focus:outline-none"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
      </div>
      <div className="flex flex-col gap-2 pt-2 flex-1 overflow-y-auto">
        {shoppingCartItems.map((item, index) => (
          <OrderCard
            item={item}
            key={index}
            onDelete={() => handleDelete(item.id)}
          />
        ))}
      </div>
      <p className="flex justify-between font-medium py-2">
        <span>Total:</span>
        <span className="text-xl">
          {numberFormat(totalPrice(shoppingCartItems))}
        </span>
      </p>
      <Link to={routes.myOrder}>
        <button
          className="bg-black/80 text-white w-full py-3 rounded-lg"
          onClick={() => handleCheckout()}
          type="button"
        >
          Checkout
        </button>
      </Link>
    </aside>
  );
}

export default CheckoutSideMenu;
