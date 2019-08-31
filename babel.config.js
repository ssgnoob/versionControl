module.exports = {
    presets: [
        ['@vue/app', {
            modules: false
        }]
    ],
    plugins: [
        ['transform-class-properties'],
        
        ['component', 
            {
                libraryName: 'som-ui',
                styleLibraryName: 'styles'
            },
            'som-ui'
        ]       
    ]
};
