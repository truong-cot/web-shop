import { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "../redux/store";

import Header from "../components/widgets/Header";
import Footer from "../components/widgets/Footer";
import "../styles/globals.scss";

import GetData from "./../components/proteced/GetData";

function MyApp({ Component, pageProps }) {
  const LayoutCustom = Component.layout;
  return (
    <Provider store={store}>
      <GetData>
        <ToastContainer />
        {LayoutCustom ? (
          <LayoutCustom {...pageProps} />
        ) : (
          <Fragment>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </Fragment>
        )}
      </GetData>
    </Provider>
  );
}

export default MyApp;
