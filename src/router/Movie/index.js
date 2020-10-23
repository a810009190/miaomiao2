export default{
    
    // 按需引入
    path: '/movie',
    name: 'Movie',
    component: () => import('@/views/Movie'),//@表示src目录
    children: [
        {
            path: 'city',
            component: () => import('@/views/Movie/City')
        },
        {
            path: 'nowplaying',
            component: () => import('@/views/Movie/Nowplaying')
        },
        {
            path: 'comingsoon',
            component: () => import('@/views/Movie/Comingsoon')
        },
        {
            path: 'search',
            component: () => import('@/views/Movie/Search')
        },
        {
            path: '',
            redirect: 'nowplaying'
        }
    ],
    
    
}