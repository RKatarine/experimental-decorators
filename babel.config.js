const presetEnvTargets = {
    "browsers": [
        "last 4 versions",
        "safari >= 7",
        "Explorer 11",
    ]
}

module.exports = {
    "presets": [
        ["@babel/preset-env", {
            targets: presetEnvTargets
        }],
        '@babel/preset-typescript',
    ],
    "plugins": [
        // нужен, чтобы выносить поллифилы на уровне модуля, без инлайна
        "@babel/plugin-transform-runtime",
        "babel-plugin-transform-typescript-metadata",
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
        ["@babel/plugin-proposal-class-properties", { "loose": true }],
        "@babel/plugin-proposal-optional-chaining",
        "@babel/plugin-proposal-nullish-coalescing-operator",
    ]
};