import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { router as Router } from './utils';
import Nabvar from './components/Navbar';
import { Provider } from 'react-redux';
import { store } from './store';
import CheckoutSideMenu from './components/CheckoutSideMenu';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <CheckoutSideMenu />
        <Nabvar />
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
