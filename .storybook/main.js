module.exports = {
    "stories": [
        "../components/**/*.stories.mdx",
        "../components/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-a11y",
        {
            name: '@storybook/addon-postcss',
            options: {
                postcssLoaderOptions: {
                    implementation: require('postcss'),
                },
                cssLoaderOptions: {
                    modules: {
                        auto: true,
                    },
                    importLoaders: 3,
                },
            },
        },
    ],
    "framework": "@storybook/react",
}