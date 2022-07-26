const withPlugins = require("next-compose-plugins");

const rewrites = () => {
    return [
        {
            source: "/store/:id*",
            destination:
                "https://refine-example-storefront.herokuapp.com/store/:id*",
        },
    ];
};

module.exports = withPlugins([], {
    experimental: {
        newNextLinkBehavior: true,
    },
    images: {
        domains: ["medusa-public-images.s3.eu-west-1.amazonaws.com"],
    },
    rewrites,
});
