/** @type {import('next').NextConfig} */

const {i18n} = require('./next-i18next.config')
module.exports = {
    reactStrictMode: true,
    i18n,
    images: {
        domains: [
            "lh3.googleusercontent.com"
        ]
    },

    async redirects() {
        return [
            {
                source: '/',
                destination: '/groups',
                permanent: true,
            },
        ]
    },
}
