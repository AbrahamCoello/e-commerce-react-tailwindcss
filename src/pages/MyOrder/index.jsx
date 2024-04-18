import { useSelector } from 'react-redux';
import Layout from '../../components/Layout';
import OrderCard from '../../components/OrderCard';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { Link, useParams } from 'react-router-dom';
import { routes } from '../../utils';

function MyOrder() {
  let { id } = useParams();
  const orderItems = useSelector(({ order }) => order.items);

  const getLastOrder = () =>
    orderItems.length ? orderItems[orderItems.length - 1] : null;

  const orderToShow = id
    ? orderItems.find((item) => item.id === id)
    : getLastOrder();

  return (
    <Layout>
      <div className="flex items-center relative w-80">
        <Link to={routes.myOrders}>
          <ChevronLeftIcon className="h-6 w-6 text-white cursor-pointer" />
        </Link>
        <h1 className="flex w-full justify-center">Mi orden</h1>
      </div>
      <div className="flex flex-col gap-2 pt-2">
        {orderToShow ? (
          orderToShow?.products?.map((item, index) => (
            <OrderCard item={item} key={index} />
          ))
        ) : (
          <p className="text-lg text-white font-bold">No existe orden</p>
        )}
      </div>
    </Layout>
  );
}

export default MyOrder;
