import Banner from "./../components/pages/home/Banner";
import Search from "./../components/pages/home/Search";
import Products from "./../components/pages/home/Products";

import { useSelector } from "react-redux";

export default function Home() {
  const { username, email } = useSelector((state) => {
    return state.user;
  });

  // console.log({ username, email });
  return (
    <div>
      <Banner></Banner>
      <Search></Search>
      <div>
        <Products></Products>
      </div>
    </div>
  );
}
