import Link from "next/link";
import styles from "../styles/components/imageCard.module.css";

export const ImageCards = ({ title }) => {
  return (
    <Link href="https://www.zomato.com/jaipur/order-food-online?delivery_subzone=2290">
      <a className={styles["card-container"]}>
        <div height="24rem" width="100%" class="card-image-container">
          <img
            alt="Order Food Online"
            src="https://b.zmtcdn.com/webFrontend/64dffaa58ffa55a377cdf42b6a690e721585809275.png?fit=around|402:360&amp;crop=402:360;*,*"
            loading="lazy"
            className={styles["card-image"]}
          />
        </div>
        <div className={styles["title-container"]}>
          <p className={styles["title"]}>{title}</p>
        </div>
      </a>
    </Link>
  );
};
