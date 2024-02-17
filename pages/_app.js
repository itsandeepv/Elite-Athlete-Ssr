import App from "next/app";
import React from "react";
import ErrorBoundary from "@components/ErrorBoundary";
import '@splidejs/react-splide/css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from "react-redux";
import { persistor, store } from "../redux/store";
import { PersistGate } from 'redux-persist/integration/react';

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
        return (
            <>
                {/* <div id="custom-loader">
                    <div className="inner">
                        <svg viewBox="0 0 38 38" width="40" height="40" stroke="#000"><g fill="none" fillRule="evenodd"><g transform="translate(1 1)" strokeWidth="2"><circle strokeOpacity=".25" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.8s" repeatCount="indefinite"></animateTransform></path></g></g></svg>
                    </div>
                </div> */}
                {load && (
                    <ErrorBoundary>
                        <Provider store={store}>
                            <PersistGate loading={null} persistor={persistor}>
                                <Component {...pageProps} />
                            </PersistGate>
                        </Provider>
                    </ErrorBoundary>
                )}
            </>
        );
    }
}
export default MyApp;