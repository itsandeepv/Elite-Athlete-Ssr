import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import c from "@constants/Common";
// import "../express-static/styles/styles.css"
export default class CustomDocument extends Document {
    static async getInitialProps(context) {
        const initialProps = await Document.getInitialProps(context);
        const sheet = new ServerStyleSheet();
        const page = await context.renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));
        const styleTags = sheet.getStyleElement();
        return { ...initialProps, ...page, styleTags, host: context.req ? context.req.hostname ? context.req.hostname : "" : "" };
    }
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="dns-prefetch" href="//fonts.googleapis.com" />
                    <link rel="dns-prefetch" href={c.BASE_URL} />
                    <link rel="stylesheet" href={`${c.BASE_URL}/assets/styles/bootstrap.min.css`} />
                    <link rel="stylesheet" href={`${c.BASE_URL}/assets/styles/slick.min.css`} />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
                    {/* <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no" /> */}
                    <link rel="stylesheet" href={`${c.BASE_URL}/assets/styles/style.css`} />
                    <link rel="stylesheet" href={`${c.BASE_URL}/assets/styles/responsive.css`} />
                    <link rel="stylesheet" href={`${c.BASE_URL}/assets/styles/loader.css`} />
                    <link rel="shortcut icon" href={`${c.BASE_URL}/assets/images/iconf.png`} />
                </Head>
                <body>
                    {this.props.styleTags}
                    <Main />
                    <NextScript />
                    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />
                </body>
            </Html>
        );
    }
}