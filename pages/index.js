import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import products from "../products.json";
import { initiateCheckout } from "../lib/payments";

const defaultCart = {
  products: {},
};

export default function Home() {
  const [cart, updateCart] = useState(defaultCart);

  const cartItems = Object.keys(cart.products).map((key) => {
    const product = products.find(({ id }) => `${id}` === `${key}`);
    return {
      ...cart.products[key],
      pricePerUnit: product.price,
    };
  });

  const subtotal = cartItems.reduce(
    (accumulator, { pricePerUnit, quantity }) => {
      return accumulator + pricePerUnit * quantity;
    },
    0
  );

  const quantity = cartItems.reduce((accumulator, { quantity }) => {
    return accumulator + quantity;
  }, 0);

  function addToCart({ id }) {
    updateCart((prev) => {
      let cart = { ...prev };

      if (cart.products[id]) {
        cart.products[id].quantity = cart.products[id].quantity + 1;
      } else {
        cart.products[id] = {
          id,
          quantity: 1,
        };
      }

      return cart;
    });
  }

  function checkout() {
    initiateCheckout({
      lineItems: cartItems.map(({ id, quantity }) => {
        return {
          price: id,
          quantity,
        };
      }),
    });
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Empire Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Empire Store</h1>

        <p className={styles.description}>
          Welcome to the best store in the Galactic Empire!
        </p>

        <p className={styles.description}>
          <strong>Items:</strong> {quantity} <br />
          <strong>Total Cost:</strong>€{subtotal}
          <br />
          <button className={styles.button} onClick={checkout}>
            Check Out
          </button>
        </p>

        <ul className={styles.grid}>
          {products.map((product) => {
            const { id, title, price, description, image } = product;
            return (
              <li className={styles.card} key={id}>
                <a href="https://nextjs.org/docs">
                  <img src={image} alt={title} />
                  <h3>{title}</h3>
                  <p>€{price}</p>
                  <p>{description}</p>
                </a>
                <p>
                  <button
                    className={styles.button}
                    onClick={() => {
                      addToCart({ id });
                    }}
                  >
                    Add to Cart
                  </button>
                </p>
              </li>
            );
          })}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
