// const AWS = require("aws-sdk");
// const c = require("./../constants/Common");
// AWS.config.update({ accessKeyId: c.AWSSNS.accessKeyId, secretAccessKey: c.AWSSNS.secretAccessKey, region: c.AWSSNS.region });

module.exports = function ({ server, app }) {
    server.get("/", (req, res) => app.render(req, res, "/Home"));
    server.get("/pages", (req, res) => app.render(req, res, "/PrivacyPolicy" ,req.query));
    server.get("/all-product", (req, res) => app.render(req, res, "/Product" ,req.query) );
    server.get("/product-details", (req, res) => app.render(req, res, "/ProductDetailsPage" ,req.query));
    server.get("/product-details/:id/:vrN", (req, res) => app.render(req, res, "/ProductDetailsPage" ,req.query));
    server.get("/wish-list", (req, res) => app.render(req, res, "/WishList"));
    server.get("/aboutus", (req, res) => app.render(req, res, "/Aboutus"));
    server.get("/checkout", (req, res) => app.render(req, res, "/Checkout"));
    server.get("/fill-detials", (req, res) => app.render(req, res, "/CheckoutFillDetails"));
    server.get("/user-dashboard", (req, res) => app.render(req, res, "/UserDashboard"));
    server.all("/*", (req, res) => app.render(req, res, "/NotFound"));
}

