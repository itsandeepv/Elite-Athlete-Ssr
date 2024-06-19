
module.exports = function ({ server, app }) {
    server.get("/", (req, res) => app.render(req, res, "/Home"));
    server.get("/pages", (req, res) => app.render(req, res, "/PrivacyPolicy" ,req.query));
    server.get("/all-product", (req, res) => app.render(req, res, "/Product" ,req.query) );
    server.get("/all-product/:productId", (req, res) => {
        const { productId } = req.params;
        return app.render(req, res, "/Product", { productId, ...req.query });
    });
    server.get("/product-details", (req, res) => app.render(req, res, "/ProductDetailsPage" ,req.query));
    server.get("/contact", (req, res) => app.render(req, res, "/ContactUs" ));
    server.get("/verify-payment", (req, res) => app.render(req, res, "/VerifyPayment" ));
    server.get("/categories", (req, res) => app.render(req, res, "/Categories" ));
    server.get("/brands", (req, res) => app.render(req, res, "/Brands" ));
    server.get("/payment-success", (req, res) => app.render(req, res, "/PaymentSuccess" ));
    server.get("/payment-failed", (req, res) => app.render(req, res, "/PaymentFailed" ));
    server.get("/wish-list", (req, res) => app.render(req, res, "/WishList"));
    server.get("/cart", (req, res) => app.render(req, res, "/UserCart"));
    server.get("/aboutus", (req, res) => app.render(req, res, "/Aboutus"));
    server.get("/checkout", (req, res) => app.render(req, res, "/Checkout"));
    server.get("/fill-detials", (req, res) => app.render(req, res, "/CheckoutFillDetails"));
    server.get("/user-dashboard", (req, res) => app.render(req, res, "/UserDashboard"));
    server.get("/order-history", (req, res) => app.render(req, res, "/UserDashboard"));
    server.all("/*", (req, res) => app.render(req, res, "/NotFound"));
}

