import ProductListing from "@components/ProductListing";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Meta from "@components/Meta";
import { getProductList } from "@api/getProductList";

export default function Home({ products }) {

  return (
    <>
    <Meta title="Fitness & Exercise Equipment for Your Facility or Home | Life Fitness" />
      <Header  />
      <main>
        <ul className="product-grid">
          {products.map((p, index) => {
            return <ProductListing key={`product${index}`} product={p.node} />;
          })}
        </ul>
      </main>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const products = await getProductList();

  return {
    props: {
      products,
    },
  };
}
