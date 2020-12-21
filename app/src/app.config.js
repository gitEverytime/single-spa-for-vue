export default [
    {
        name:'main',
        // 需要一直在页面中显示
        base:true,
        customProps:{},
        // 项目的入口
        projectIndex:process.env.mode === 'prod' ? 'http://localhost:9100' : 'http://localhost:9100/'
    },
    {
        name:'customers',
        base:true,
        path:['/customers'],
        domID:'main',
        projectIndex:process.env.mode === 'prod' ? 'http://localhost:5100':'http://localhost:5100/'
    },
    {
        name:'goods',
        base:true,
        path:'/goods',
        domID:'main',
        projectIndex:process.env.mode === 'prod'? 'http://localhost:9010' : 'http://localhost:9010/'
    },
    {
        name:'iframe',
        base:true,
        path:'/iframe',
        domID:'main',
        projectIndex:process.env.mode === 'prod'? 'http://localhost:9013' : 'http://localhost:9013/'
    }
]
