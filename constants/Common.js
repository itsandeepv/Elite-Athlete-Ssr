const config = require("./../config");

module.exports = {
    APP_NAME: "Suppkart",
    AWSSNS: {
        accessKeyId: config.AWS.key,
        secretAccessKey: config.AWS.secret,
        region: config.AWS.region,
        email: config.AWS.email,
        bucketName: config.AWS.bucket,
        bucketBaseUrl: `${config.BUCKET_URL}/bucket/`
    },
    BASE_URL: config.BASE,
    APP_LOGO : `${config.BUCKET_URL}/assets/images/logo.png`,
    SITE_EMAIL: "info@regiustechnologies.com",
    FILE_SIZES: {
        profile: ['50*50','100*100','200*200','500*500']
    },
    RECAPTCHA: {
        SHOW: config.RECAPTCHA.SHOW,
        SITE_KEY: config.RECAPTCHA.SITE_KEY,
        SECRET_KEY: config.RECAPTCHA.SECRET_KEY
    },
    GOOGLE_MAP_KEY: config.GOOGLE_MAP_KEY,
    JWT_ACCESS_TOKEN: config.JWT_ACCESS_TOKEN,
    SALT_ROUNDS: 9,
    SESSION_KEY: 'shSDFGfgoifdg34tsDGFfsdgaljsf',
    width: '1440px'
}