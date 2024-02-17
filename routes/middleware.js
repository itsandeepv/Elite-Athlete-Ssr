const c = require("./../constants/Common");
const jwt = require("jsonwebtoken");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const MobileDetect = require("mobile-detect");
const cors = require("cors");
const Promise = require("bluebird");
Promise.promisifyAll(jwt);

module.exports = function ({ server, app }) {
    const requestCount = {};
    server.use(morgan("dev"));
    server.use(cookieParser(c.SESSION_KEY));
    // ---- CORS ---- register
    server.use(cors({
        'allowedHeaders': '*',
        'origin': '*',
        'methods': '*',
        'preflightContinue': false
    }));
    server.use(bodyParser.json({ limit: "50mb" }));
    // --START-- URL middleware
    server.use((req, res, next) => {
        if (req.path.substr(-1) == "/" && req.path.length > 1) {
            let query = req.url.slice(req.path.length);
            res.redirect(301, req.path.slice(0, -1) + query);
        } else {
            next();
        }
    });
    server.use((req, res, next) => {
        if (/\/{2,}/g.test(req.path)) {
            let query = req.url.slice(req.path.length);
            let path = req.path.replace(/\/{2,}/g, "/");
            res.redirect(301, path + query);
        } else {
            next();
        }
    });
    server.use((req, res, next) => {
        md = new MobileDetect(req.headers["user-agent"]);
        req.mobile = md.mobile();
        next();
    });
    // --END-- URL middleware

    // Custom middleware for request throttling
    // Apply the throttle middleware to all routes or specific routes
    server.use((req, res, next) => {
        const MAX_REQUESTS_PER_MINUTE = 100; // Maximum requests allowed per minute
        const windowMs = 30 * 1000; // 1 minute

        // Implement a storage mechanism to track request counts per IP address
        // For simplicity, we'll use an in-memory object to store the request counts
        const ipAddress = req.ip;
        let shouldApplyThrottle = false;

        // Check if the route contains "api" or "web"
        if (req.url.includes("api") || req.url.includes("auth")) {
            shouldApplyThrottle = true;
        }

        // Check if the request count exceeds the limit only for routes containing "api" or "web"
        if (shouldApplyThrottle) {
            if (requestCount[ipAddress] && requestCount[ipAddress] >= MAX_REQUESTS_PER_MINUTE) {
                return res.status(429).json({ status: 429, message: "Too many requests" });

            }
            requestCount[ipAddress] = (requestCount[ipAddress] || 0) + 1;
            setTimeout(() => {
                requestCount[ipAddress] = (requestCount[ipAddress] || 0) - 1;
            }, windowMs);
        }
        // Proceed to the next middleware or route handler
        next();
    });


}