export default{
    
    // 按需引入
    path: '/mine',
    name: 'Mine',

    component: () => import('@/views/Mine')//@表示src目录
    
}