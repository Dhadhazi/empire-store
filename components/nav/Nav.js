import { FaShoppingCart } from "react-icons/fa";

import styles from "../Nav/Nav.module.css";

import { useCart } from "../../hooks/use-cart.js";

const Nav = () => {
  const { subtotal, checkout } = useCart();
  return (
    <nav className={styles.nav}>
      <p className={styles.navTitle}>Empire Store</p>
      <p className={styles.navCart}>
        <button onClick={checkout}>
          <FaShoppingCart /> ${subtotal.toFixed(2)}
        </button>
      </p>
    </nav>
  );
};

export default Nav;