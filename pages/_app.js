import App from "next/app";
import React from "react";
import ErrorBoundary from "@components/ErrorBoundary";
import '@splidejs/react-splide/css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from "react-redux";
import { persistor, store } from "../redux/store";
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Loader from "@components/Modal/Loader";


class MyApp extends App {
    constructor(props) {
        super(props);
        this.state = {
            load: false
        }
    }
    componentDidMount() {
        this.setState({ load: true });
    }
    render() {
        const { Component, pageProps } = this.props;
        const { load } = this.state;
        let loading = true
        setTimeout(() => {
            loading = false
        }, 3000);
        // console.log("asdfasf" ,  load);

        return (
            <React.Fragment>
                <ToastContainer position="top-center" autoClose="2000" hideProgressBar="true" />
                {/* { loading &&<div id="custom-loader-ssr">
                    <div className="inner">
                        <Loader />
                    </div>
                </div>} */}
                {load && (
                    <ErrorBoundary>
                        <Provider store={store}>
                            <PersistGate loading={null} persistor={persistor}>
                                <Component {...pageProps} />
                            </PersistGate>
                        </Provider>
                    </ErrorBoundary>
                )}
            </React.Fragment>
        );
    }
}
export default MyApp;