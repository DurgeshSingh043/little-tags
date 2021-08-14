<<<<<<< HEAD
import Header from './components/molecules/header/header';

import './App.scss';

function App() {
  return (
    <>
      <Header></Header>
    </>
=======
import { Route, Switch } from 'react-router-dom';

import { Checkout, Home, OrderSuccessful, Listing, Wishlist, ProfileDetails } from './Pages';
import PageTemplate from './components/templates/PageTemplate';
import ProductDetail from './Pages/ProductDetail';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <PageTemplate>
      <Switch>
        <Route path="/order-successful" component={OrderSuccessful} />
        <Route path="/listing" component={Listing} />
        <Route path="/wishlist" component={Wishlist} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/profile" component={ProfileDetails} />
        <Route path="/productdetail/:id" component={ProductDetail} />
        <Route path="/" component={Home} />
      </Switch>
    </PageTemplate>
>>>>>>> a3d596608d3dd3fb79ae8212c67581a3ad1238b7
  );
}

export default App;
