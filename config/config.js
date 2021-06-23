

export default {
    singular: true,
    plugins: [
        ['umi-plugin-react', {
            antd:true,
            dva: true,

            // 这里暂时还没有添加配置，该插件还不会有作用，我们会在后面的课程按照需求打开相应的配置
        }],
    ],
    routes: [
        {
            path: '/',
            component: './Main',
            routes:[
                {
                    path:'/',
                    component:'./Content'
                },
                {
                    path:"content",
                    component:'./Content'
                },
                {
                    path:'shopList',
                    component:'./ShoppingList'
                },{
                    path:'square',
                    component:'./Square'
                },{
                    path:"puzzleCardsPage",
                    component:'./puzzlecards'
                }
            ]

        }
    ]
}
