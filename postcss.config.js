const dev = process.env.NODE_ENV !== 'production';

module.exports = () => {
    return {
        plugins: [
            require('./src/utils/less-prefix-url')({
                prefix: '/haokan-next',
                useUrl: !dev
            }),
            require('autoprefixer')({
                browsers: [
                    '> 1%',
                    'last 2 versions',
                    'Firefox ESR',
                    'Opera 12.1',
                    'not ie <= 9',
                    'Android >= 4.0',
                    'iOS >=9'
                ]
            }),
            require('postcss-plugin-px2rem')({
                rootValue: {
                    px: 124.2
                }
            })
        ]
    }
};
