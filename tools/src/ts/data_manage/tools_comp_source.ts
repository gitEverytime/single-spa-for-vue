export default {
    //基础表单组件数据源
    base_scource:{
        type: '',                              //组件类型
        width: '',                             //宽
        height: '',                            //长
        name: '',                              //名称
        top: '',                               //垂直距离
        left: '',                              //水平距离
        position: 'absolute',                  //定位
        isHide: false,                         //是否隐藏
        isDisabled: false,                     //是否禁用
        index: '',                             //索引
        isTextBold: false,                     //是否加粗
        isTextItalics: false,                  //是否斜体
        isTextUnderLine:false,                 //是否有下划线
        isTextDeleteLine:false,                //是否有删除线
        fontSize:'14px',                       //字体大小
        fontFamily:'Microsoft YaHei',          //字体
        padding:'',                            //padding值
        margin:'',                             //margin值
        borderRadius:'',                       //圆角度
        color:'#454545',                              //字体颜色
        isLock:false,                          //是否锁定
        key:'',                                //数据库字段名称
        value:'',                              //数据库字段值 string
        value_arr:[],                          //数据库字段值 array
        value_bool:false,                      //数据库字段值 boolean
        _key:'',                               //数据库字段外键名称
        _value:'',                             //数据库字段外键值
        parentName:'',                         //组件添加的父级class名称
        btnType:'primary',                     //按钮类型
        interactiveType:'no_function',         //交互类型
        operateLayer:'main',                   //拖拽操作的层级
        enumops:'',                            //数据字典接口配置
        options:[                              //静态数据列表
            {
                text:'选项一',
                label:'选项一',
                value:1
            },
            {
                text:'选项二',
                label:'选项一',
                value:2
            }
        ],
        required:false,                        //是否必填
        checkRoot:'',                          //检查权限接口配置
        alias:'',                              //别名
        handles:[],                            //设置拖拽句柄
        readonly:true,                         //是否只读
        disabled:true,                         //是否禁用
        borderOuter:false,                     //是否显示外边框
        borderInner:false,                     //是否显示内边框
    },
    //布局容器组件数据源
    layout_scource:{
        type: '',
        isHide: false,                         //是否隐藏
        width: '',
        height: '',
        name: '',
        top: '',
        left: '',
        position: 'absolute',
        index: '',
        padding:'',
        margin:'',
        borderRadius:'',
        isLock:false,
        flex:4,                                  //栅格格数
        children:[

        ],
        operateLayer:'main',                     //拖拽操作的层级
    },
    //弹窗容器组件数据源
    modal_scource:{
        width:'70%',
        height:'',
        top:'',
        left:'',
        type:'modal',                             //类型
        name:'弹窗',
        okText:'确认',                             //确认文案
        cancelText:'取消',                         //取消文案
        title:'Modal',                            //弹窗标题
        triggerElement:'',                        //触发元素
        visible:false,                            //弹窗是否显示
    },
    /**
     * 表格数据源
     */
    table_source: {
        type: '',
        isHide: false,                         //是否隐藏
        width: '',
        height: '',
        name: '',
        top: '',
        left: '',
        position: 'absolute',
        index: '',
        isBold: false,
        fontFamily: '',
        padding: '',
        margin: '',
        borderRadius: '',
        color: '',
        isLock: false,
        flex: 4,                                  //栅格格数
        children: [],
        operateLayer: 'main',                     //拖拽操作的层级
        cols: 6,
        table_data: [],
    },
    /**
     * 明细表数据源
     */
    detail_source:{
        type: '',
        isHide: false,                         //是否隐藏
        width: '',
        height: '',
        name: '',
        top: '',
        left: '',
        position: 'absolute',
        index: '',
        isBold: false,
        fontFamily:'',
        padding:'',
        margin:'',
        borderRadius:'',
        color:'',
        isLock:false,
        flex:4,                                  //栅格格数
        children:[],
        operateLayer:'main',                     //拖拽操作的层级
        cols:6,
        table_data:[
            {
                type:'head',
                children:[
                    {
                        width:132,
                        height:40,
                        color:'#999999',
                        title:'',
                    },
                    {
                        width:132,
                        height:40,
                        color:'#999999',
                        title:'',
                    },
                    {
                        width:132,
                        height:40,
                        color:'#999999',
                        title:'',
                    },
                    {
                        width:132,
                        height:40,
                        color:'#999999',
                        title:'',
                    },
                    {
                        width:132,
                        height:40,
                        color:'#999999',
                        title:'',
                    },
                    {
                        width:132,
                        height:40,
                        color:'#999999',
                        title:'',
                    }
                ]
            },
            {
                type:'body',
                time:'',
                children:[
                    {
                        width:132,
                        height:40,
                        time:'',
                        color:'#999999'
                    },
                    {
                        width:132,
                        height:40,
                        time:'',
                        color:'#999999'
                    },
                    {
                        width:132,
                        height:40,
                        time:'',
                        color:'#999999'
                    },
                    {
                        width:132,
                        height:40,
                        time:'',
                        color:'#999999'
                    },
                    {
                        width:132,
                        height:40,
                        time:'',
                        color:'#999999'
                    },
                    {
                        width:132,
                        height:40,
                        time:'',
                        color:'#999999'
                    }
                ]
            },
            {
                type:'foot',
                children:[
                    {
                        width:132,
                        height:40,
                        color:'#999999',
                        show:false,
                        cols:null,
                        showTd:true
                    },
                    {
                        width:132,
                        height:40,
                        color:'#999999',
                        show:false,
                        cols:null,
                        showTd:true
                    },
                    {
                        width:132,
                        height:40,
                        color:'#999999',
                        show:false,
                        cols:null,
                        showTd:true
                    },
                    {
                        width:132,
                        height:40,
                        color:'#999999',
                        show:false,
                        cols:null,
                        showTd:true
                    },
                    {
                        width:132,
                        height:40,
                        color:'#999999',
                        show:false,
                        cols:null,
                        showTd:true
                    },
                    {
                        width:132,
                        height:40,
                        color:'#999999',
                        show:false,
                        cols:null,
                        showTd:true
                    }
                ]
            }
        ]
    }
}
