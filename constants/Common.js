const config = require("./../config");

module.exports = {
    APP_NAME: "Suppkart",
    BASE_URL: "http://localhost:4003",
    APP_LOGO : `${config.BUCKET_URL}/assets/images/logo.png`,
    SITE_EMAIL: "customercare@suppkart.com",
    FILE_SIZES: {
        profile: ['50*50','100*100','200*200','500*500']
    },
    SALT_ROUNDS: 9,
    SESSION_KEY: 'shSDFGfgoifdg34tsDGFfsdgaljsf',
    width: '1440px'
}