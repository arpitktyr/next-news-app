import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";

const Products = ({ products }) => {
  //console.log(products);
  return (
    <Layout>
      <Head>
        <title> All Products </title>
      </Head>
      <h1 className="main-heading">Products</h1>
      <div className="product">
        {products.length ? (
          products.map((item) => {
            return (
              <div key={item.id} className="product-card">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={200}
                  height={150}
                />
                <div className="description">
                  <p>{item.title}</p>
                  <span>
                    Price : <strong>{item.price} $ </strong>
                  </span>
                  <Link href={`products/${item.id}`}>
                    <button> View Product </button>
                  </Link>
                </div>
              </div>
            );
          })
        ) : (
          <p>No result Found</p>
        )}
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://react-cart-backend.cyclic.app/products");
  const productResponse = await res.json();
  const products = productResponse.products ?? [];

  return {
    props: {
      products,
    },
  };
}

export default Products;
