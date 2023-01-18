import Header from '@components/Header';
import Footer from '@components/Footer';
import Cart from '@components/Cart';
import Meta from '@components/Meta'
import { useAppContext } from '../state';

export default function CartPage() {
  return (
    <>
     <Meta title="LifeFitness | Cart" />
      <Header />
      <main className="cart-page">
        <article className="cart-page-content">
          <h1>Your cart</h1>
          <Cart />
        </article>
      </main>
      <Footer />
    </>
  );
}
