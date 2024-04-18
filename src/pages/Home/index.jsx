import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/Card';
import Layout from '../../components/Layout';
import Loader from '../../components/Loader';
import { useFetch } from '../../hooks';
import { setShoppingCartRedux } from '../../store/features/ShoppingCart';
import ProductDetails from '../../components/ProductDetails';
import {
  setProductRedux,
  unsetProductRedux,
} from '../../store/features/Product';
import { setCheckoutSideMenuRedux } from '../../store/features/CheckoutSideMenu';
import clone from 'just-clone';
import { useEffect, useState } from 'react';
import { setProductsRedux } from '../../store/features/Products';
import { useLocation } from 'react-router-dom';

function Home() {
  let { pathname } = useLocation(); // pathname = /category/electronics
  const { loading, error, value } = useFetch('/products' + pathname, {}, [
    pathname,
  ]);
  const shoppinCartItems = useSelector(
    ({ shoppingCart }) => shoppingCart.items
  );
  const productsItems = useSelector(({ products }) => products.list);
  const productsItemsFiltered = useSelector(
    ({ products }) => products.filteredList
  );
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState('');

  const handleOpenDetails = (item) => {
    dispatch(setProductRedux({ isOpenDetails: true, details: item }));
  };

  const addProductToCart = (event, item) => {
    event.stopPropagation();

    const productIndex = shoppinCartItems.findIndex(
      (product) => product.id === item.id
    );
    let newShoppingCartItems = [];
    if (productIndex !== -1) {
      newShoppingCartItems = clone(shoppinCartItems);
      newShoppingCartItems[productIndex].quantity += 1;
      newShoppingCartItems[productIndex].price =
        newShoppingCartItems[productIndex].price + item.price;
    } else {
      newShoppingCartItems = [
        ...clone(shoppinCartItems),
        { ...item, quantity: 1 },
      ];
    }

    dispatch(
      setShoppingCartRedux({
        items: newShoppingCartItems,
      })
    );
    dispatch(
      setCheckoutSideMenuRedux({
        isOpenCheckout: true,
      })
    );
    // Reset product details
    dispatch(unsetProductRedux());
  };

  useEffect(() => {
    if (value) {
      dispatch(setProductsRedux({ list: value, filteredList: value }));
    }
  }, [dispatch, value]);

  useEffect(() => {
    if (searchInput) {
      dispatch(
        setProductsRedux({
          filteredList: productsItems.filter((item) =>
            item.title.toLowerCase().includes(searchInput.toLowerCase())
          ),
        })
      );
    }
  }, [searchInput, dispatch, productsItems]);

  const itemsToRender = searchInput.length
    ? productsItemsFiltered
    : productsItems;

  return (
    <Layout>
      <div className="flex items-center w-full">
        <h1 className="flex w-full justify-center">Productos Exclusivos</h1>
      </div>
      <input
        type="text"
        placeholder="Buscar por titulo"
        className="rounded-lg border border-black w-80 p-4 my-4 focus:outline-none"
        onChange={({ target }) => setSearchInput(target.value)}
      />
      {loading ? (
        <div className="grid items-center justify-center w-96 h-96 ">
          <Loader />
        </div>
      ) : (
        <>
          {itemsToRender.length ? (
            <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
              {itemsToRender.map((item) => (
                <Card
                  key={item.id}
                  item={item}
                  onClick={() => handleOpenDetails(item)}
                  onAddToCart={(event) => addProductToCart(event, item)}
                />
              ))}
            </div>
          ) : (
            <div>Sin resultados</div>
          )}
          {error && <div>Error...</div>}
        </>
      )}
      <ProductDetails />
    </Layout>
  );
}

export default Home;
