import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import { numberFormat, routes } from '../../utils';
import { CalendarIcon, ShoppingBagIcon } from '@heroicons/react/24/solid';

function MyOrders() {
  const orderItems = useSelector(({ order }) => order.items);
  return (
    <Layout>
      <div className="flex items-center justify-center w-80">
        <h1>Mis Ordenes</h1>
      </div>
      <div className="flex flex-col gap-2 pt-2">
        {orderItems.map((item) => {
          const { id, date, totalProducts, total } = item;
          return (
            <Link key={id} to={`${routes.myOrders}/${id}`}>
              <div className="border border-white p-2 font-medium cursor-pointer rounded-lg w-48">
                <p className="flex gap-1">
                  <CalendarIcon className="h-6 w-6 text-white" />
                  <span>{date}</span>
                </p>
                <div className="flex pt-1 justify-between">
                  <p className="flex gap-1">
                    <ShoppingBagIcon className="h-6 w-6 text-white" />
                    <span>{totalProducts}</span>
                  </p>
                  <p className="text-lg">{numberFormat(total)}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
}

export default MyOrders;
