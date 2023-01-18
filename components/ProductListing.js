import Link from 'next/link';
import { formatPrice } from "../utilityFunctions";

export default function ProductListing({ product }) {
  let image = product.images.edges[0].node;
  return (
    <li className="product-card">
      <div className="product-card-frame">
        <Link href={`/product/${product.handle}`}>
          <a><img className="prodimg" src={image.src} alt={image.altText} /></a>
        </Link>
      </div>
      <div className="product-card-text">
        <h3 className="product-card-title">{product.title}</h3>
        <p className="product-card-price">{formatPrice(product.priceRange.minVariantPrice.amount)}</p>
        {/* <p className="product-card-description">
          {product.description.substring(0, 60)}...
        </p> */}
      </div>
      {/* <Link href={`/product/${product.handle}`}>
        <a>
          <button>View Item {`>`} </button>
        </a>
      </Link> */}
    </li>
  );
}
