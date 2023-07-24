import React from "react";
import Layout from "../../components/Layout";
import Head from "next/head";
import Image from "next/image";

const Product = ({ result, title }) => {
  //console.log(result, title);
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <h1 className="main-heading">{title}</h1>

      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <Image
              src={result.image}
              className="card-img-top"
              alt={result.title}
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className="col-sm-6 product-detail">
          <div className=" product-detail card-body">
            <h5 className="card-title">{result.title}</h5>
            <p className="text-muted mb-3">{result.description}</p>
            <div className="offers">
              <ul className="offer-list">
                <li>
                  <span>Special Price</span> Get extra 5% off (price inclusive
                  of discount)
                </li>

                <li>
                  <span>Bank Offer</span> 5% Cashback* on HDFC Bank Debit Cards
                </li>
                <li>
                  <span>Bank Offer</span> Extra 5% off* with Axis Bank Buzz
                  Credit Card
                </li>
              </ul>
            </div>
            <div className="highlight">
              <h5 className="title">Services:</h5>
              <ul className="highlight-list">
                <li>
                  <p>30 Day Return Policy</p>
                </li>
                <li>
                  <p>Cash on Delivery available</p>
                </li>
              </ul>
            </div>

            <div className="price">
              <span className="price-after">₹{result.price}</span>
              <span className="price-before">
                $ {Math.round(result.price + result.price * 0.1)}
              </span>
              <span className="discount">10% off</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const res = await fetch("https://react-cart-backend.cyclic.app/products");
  const productResponse = await res.json();
  const products = productResponse.products ?? [];
  return {
    paths: products?.map((item) => {
      return { params: { id: item.id.toString() } };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const id = params.id;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await res.json();
  return {
    props: {
      result: data,
      title: data.title,
    },
  };
}
export default Product;
