module.exports = {
    // parser: '@typescript-eslint/parser',
    parser: 'vue-eslint-parser',
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/base',
        '@vue/typescript',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ], //定义文件继承的子规范
    plugins: ['@typescript-eslint', 'eslint-plugin-vue'], //定义了该eslint文件所依赖的插件
    env: {
        //指定代码的运行环境
        browser: true,
        node: true,
    },
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
};
