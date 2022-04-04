import styles from "../styles/Home.module.scss";
import Banner from "../components/pages/home/Banner";
import Search from "../components/pages/home/Search";
import Classify from "../components/pages/home/Classify";
import Products from "../components/pages/home/Products";
import SearchProduct from "./../components/pages/search-product";

export default function Home() {
  return (
    <div className={styles.container}>
      <Banner></Banner>
      <Search></Search>
      <Classify></Classify>
      <div>
        <Products></Products>
        <Products></Products>
        <Products></Products>
      </div>
    </div>
  );
}
