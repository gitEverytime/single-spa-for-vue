export default [
    {
        name:'main',
        // 需要一直在页面中显示
        base:true,
        customProps:{},
        // 项目的入口
        projectIndex:process.env.mode === 'prod' ? 'http://localhost:9100' : 'http://localhost:9100/',
        //routeMode: 'history'
    },
    {
        name:'customers',
        base:false,
        path:['#/customers','/detail'],
        domID:'main',
       // routeMode: 'history',
        projectIndex:process.env.mode === 'prod' ? 'http://localhost:5100':'http://localhost:5100/'
    },
    {
        name:'tools',
        base:false,
        path:'#/tools',
        domID:'main',
        projectIndex:process.env.mode === 'prod' ? 'http://localhost:9010' : 'http://localhost:9010/',
        //routeMode: 'history'
    },
    {
        name:'iframe',
        base:false,
        path:'#/iframe',
        domID:'main',
        projectIndex:process.env.mode === 'prod'? 'http://localhost:9013' : 'http://localhost:9013/',
        //routeMode: 'history'
    }
]
