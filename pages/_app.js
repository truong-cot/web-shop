import { Fragment } from "react";
import Header from "../components/widgets/Header";
import Footer from "../components/widgets/Footer";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  const LayoutCustom = Component.layout;
  return (
    <Fragment>
      {LayoutCustom ? (
        <LayoutCustom {...pageProps} />
      ) : (
        <Fragment>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Fragment>
      )}
    </Fragment>
  );
}

export default MyApp;
