import { useSelector } from 'react-redux';
import NavItem from './NavItem';

const primaryMenu = [
  {
    to: '/',
    text: 'Shopi',
    className: 'font-semibold text-lg',
  },
  {
    to: '/',
    text: 'Todos',
    className: '',
  },
  {
    to: '/category/electronics',
    text: 'Electrónicos',
    className: '',
  },
  {
    to: '/category/jewelery',
    text: 'Joyeria',
    className: '',
  },
  {
    to: "/category/men's clothing",
    text: 'Ropa para caballero',
    className: '',
  },
  {
    to: "/category/women's clothing",
    text: 'Ropa para dama',
    className: '',
  },
  {
    to: '/category/others',
    text: 'Otros',
    className: '',
  },
];

const secondMenu = [
  {
    to: '/email',
    text: 'jhon@doe.com',
    className: 'text-white/60',
  },
  {
    to: '/my-orders',
    text: 'Mi ordenes',
    className: '',
  },
  {
    to: '/my-account',
    text: 'Mi cuenta',
    className: '',
  },
  {
    to: '/sign-in',
    text: 'Registrarse',
    className: '',
  },
  {
    to: '/shop-car',
    text: '🛒',
    className: '',
  },
];

function Nabvar() {
  const shoppinCartItems = useSelector((state) => state.shoppingCart.items);
  const highlight = 'underline underline-offset-4';

  return (
    <nav className="flex items-center justify-between w-full py-5 px-8 text-sm fixed z-10 top-0 left-0 bg-gray-800">
      <ul className="flex gap-3 items-center">
        {primaryMenu.map((item) => (
          <li key={item.text}>
            <NavItem to={item.to} activeStyle={highlight}>
              <span className={item.className}>{item.text}</span>
            </NavItem>
          </li>
        ))}
      </ul>
      <ul className="flex gap-3 items-center">
        {secondMenu.map((item, index) => (
          <li key={item.text}>
            <NavItem to={item.to} activeStyle={highlight}>
              <span className={item.className}>
                {index === secondMenu.length - 1
                  ? `🛒 ${shoppinCartItems.length ?? ''}`
                  : item.text}
              </span>
            </NavItem>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nabvar;
