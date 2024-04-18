import { useRoutes } from 'react-router-dom';
import Home from '../pages/Home';
import MyAccount from '../pages/MyAccount';
import MyOrder from '../pages/MyOrder';
import MyOrders from '../pages/MyOrders';
import NotFound from '../pages/NotFound';
import routes from './routes';

const Router = () => {
  let routesJsx = useRoutes([
    {
      path: routes.home,
      element: <Home />,
    },
    {
      path: routes.category + '/:category',
      element: <Home />,
    },
    {
      path: routes.myAccount,
      element: <MyAccount />,
    },
    {
      path: routes.myOrders,
      element: <MyOrders />,
    },
    {
      path: routes.myOrder,
      element: <MyOrder />,
    },
    {
      path: routes.myOrders + '/:id',
      element: <MyOrder />,
    },
    {
      path: routes.myOrders + '/last',
      element: <MyOrder />,
    },
    {
      path: routes.notFound,
      element: <NotFound />,
    },
  ]);
  return routesJsx;
};

export default Router;
