module.exports = {
    module: {
        rules: [{ 
            test: /\.md/, // allows importing of all markdown files
            type: 'asset/source',
        }]
    }
}