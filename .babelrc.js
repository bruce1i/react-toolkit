const presets = [
    ["@babel/preset-env", {
        useBuiltIns: "entry",
        corejs: 3,
        targets: {
            chrome: "72",
            // ie: "10"
        }
    }],
    "@babel/preset-react"
];

const plugins = [];

module.exports = {presets, plugins};
