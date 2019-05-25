module.exports = {
    title: 'Shortcuts save1s',
    description: 'Use shortcuts to save 1 second for your life.',
    themeConfig: {
        nav: [
            { text: '指南', link: '/' },
            { text: 'API', link: '/api/' },
            { text: '部署', link: '/deploy/' },
            { text: 'GitHub', link: 'https://github.com/save1s/shortcuts' },
        ],
        sidebar: {
            '/api/': [
                '',
                {
                    title: 'API 详细',
                    collapsable: false,
                    sidebarDepth: 3,
                    children: [
                        'university'
                    ],
                },
            ],
            '/': [
                '',
                {
                    title: '捷径列表',
                    collapsable: true,
                    sidebarDepth: 3,
                    children: [
                        'university'
                    ],
                },
            ],
        },
    }
}
