import c from "./Common";
module.exports = {
    AUTH: {
        login: `${c.BASE_URL}/auth/login`,
        forgot: `${c.BASE_URL}/auth/forgot-password`,
        resetToken: `${c.BASE_URL}/auth/reset-password-token`,
        resetPassword: `${c.BASE_URL}/auth/reset-password`,
        register: `${c.BASE_URL}/auth/register`
    }
}