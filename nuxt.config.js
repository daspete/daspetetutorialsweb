module.exports = {
    env: {

    },

    head: {
        titleTemplate: '%s | DasPeTe Tutorials',
        meta: [
            {
                charset: 'utf-8'
            }, 
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            }
        ],
        link: [
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Open+Sans'
            }
        ]
    },

    css: [
        '~/assets/css/main.scss',
        '~/node_modules/prismjs/themes/prism-okaidia.css'
    ],

    build: {
        extractCSS: true,
        vendor: [
            'prismjs'
        ]
    },

    modules: [
        '@nuxtjs/axios'
    ],

    plugins: [
        '~/plugins/markdown'
    ]
}