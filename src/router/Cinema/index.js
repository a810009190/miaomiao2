export default{
    
    // 按需引入
    path: '/cinema',
    name: 'Cinema',

    component: () => import('@/views/Cinema'),//@表示src目录
    children:[
        {
            path:'alltown',
            component: () => import('@/views/Cinema/Alltown')
        },
        {
            path: '',
            redirect: 'alltown'
        }
    ]
}