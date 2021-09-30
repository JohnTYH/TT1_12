import 'antd/dist/antd.css';
import { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { GlobalContext } from './context';
import { CheckoutPage, LoginPage, NotFoundPage } from './pages';
import { HomePage } from './pages/HomePage';
import { prods } from './static';

function App() {
  const [cart, setCart] = useState({});
  const [token, setToken] = useState();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    onInit()
  }, []);

  const onInit = () => {
    const token = JSON.parse(sessionStorage.getItem("token"));
    if (!!token) {
      setToken({ token });
    }
    setCart(prods);
    setMounted(true);
  }

  const contextValue = {
    cart, setCart: cart => setCart(cart),
    token, setToken: token => setToken(token)
  };

  return (
    <div className="App">
      <GlobalContext.Provider value={contextValue}>
        {mounted && <BrowserRouter basename={'/'}>
          <Switch>
            <Route path={'/'} exact={true} render={() => <LoginPage />} />
            <Route path={'/home'} exact={true} render={() => <HomePage />} />
            <Route path={'/checkout'} exact={true} render={() => <CheckoutPage />} />
            <Route path={'/not-found'} exact={true} render={() => <NotFoundPage />} />
            <Route
              render={() => <Redirect key={'NOT_FOUND'} to={{ pathname: '/not-found' }} />}
            />
          </Switch>
        </BrowserRouter>}
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
