import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Cart from '@components/Cart';
import { useAppContext } from '../state';

export default function CartPage() {
  return (
    <>
      <Head>
        <title>LifeFitness | Cart</title>
        <link rel="icon" href="/LifeFitness-favicon.webp" />
      </Head>

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
