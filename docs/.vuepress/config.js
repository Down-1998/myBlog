module.exports = {
    title: '瓜皮伦前端之旅',
    description: '我的个人网站',
    base: '/myBlog/', // 这是部署到github相关的配置
    themeConfig: {
        nav: [ // 导航栏配置
            { text: '主页', link: '/' },
            { text: '面试', link: '/interview/' },
            { text: 'Vue', link: '/basic/' },
            { text: 'React', link: '/reactbase/' },
            { text: 'Node.js', link: '/nodebase/' },
            { text: '算法题库', link: '/algorithm/' },
            { text: 'CSDN', link: 'https://blog.csdn.net/qq_39341415?spm=1000.2115.3001.5343' }
        ],
        sidebar: {
            //vue
            '/basic/': [
                '../basic/vuebasic/',
                '../basic/onAndEmit/'
            ],
            //node
            '/nodebase/': [
                '../nodebase/express/'
            ]
        },
        repo: 'https://github.com/Down-1998',
        sidebarDepth: 2, // 侧边栏显示2级
        smoothScroll: true,
        searchMaxSuggestions: 10, //来调整默认搜索框显示的搜索结果数量
    }
}