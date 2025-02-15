import Link from 'next/link';
import { useAppContext } from '../state';

export default function Header() {
  const {items} = useAppContext()

  return (
    <header className="app-header">
      <h1>
        <Link href="/">
          <a><img src="/logo-svg-data.svg" alt="Logo" /></a>
        </Link>
      </h1>
      <nav className="main-nav">
        <ul>
          <li className="main-nav-item">
            <Link href="/">
              <a>All Products</a>
            </Link>
          </li>
          {/* <li className="main-nav-item">
            <Link href="/cheeses"><a>Cheeses</a></Link>
          </li>
          <li className="main-nav-item">
            <Link href="/meats"><a>Meats</a></Link>
          </li>
          <li className="main-nav-item">
            <Link href="/boards"><a>Boards</a></Link>
          </li> */}
          <li className="main-nav-item">
            <Link href="/cart">
              {items > 0 ?  <a className="cart cartLink">Shopping Cart - <span className="cart-size">{items} </span></a> :  <a className="cart cartLink">Shopping Cart</a>}
            </Link>
          </li>
        </ul>
        <div id="select"></div>
      </nav>
   
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.css" />
    </header>
  );
}
